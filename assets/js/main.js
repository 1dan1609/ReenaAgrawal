/* Shared behavior: mobile nav toggle, dropdown, category-tagged form submit feedback. */
(function () {
  "use strict";

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".nav-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.getAttribute("data-open") === "true";
        menu.setAttribute("data-open", String(!open));
        toggle.setAttribute("aria-expanded", String(!open));
      });
    }

    document.querySelectorAll(".nav-item--dropdown").forEach(function (item) {
      var trigger = item.querySelector(".nav-dropdown-trigger");
      if (!trigger) return;
      trigger.addEventListener("click", function () {
        var open = item.getAttribute("data-open") === "true";
        document.querySelectorAll(".nav-item--dropdown").forEach(function (other) {
          other.setAttribute("data-open", "false");
        });
        item.setAttribute("data-open", String(!open));
        trigger.setAttribute("aria-expanded", String(!open));
      });
    });

    document.addEventListener("click", function (event) {
      document.querySelectorAll(".nav-item--dropdown").forEach(function (item) {
        if (!item.contains(event.target)) item.setAttribute("data-open", "false");
      });
      if (menu && !menu.contains(event.target) && event.target !== toggle) {
        menu.setAttribute("data-open", "false");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Lead forms post to Formspree in the background so the visitor stays on
     the page. Without fetch (or JS at all) the form's own action/method
     still submit it the ordinary way. */
  var CONTACT_FALLBACK = "email reena2851@gmail.com or WhatsApp +91 80802 12851";

  function postForm(form, data) {
    return fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    }).then(function (response) {
      return response.json().catch(function () { return {}; }).then(function (body) {
        return { ok: response.ok, body: body };
      });
    });
  }

  function hasAttachment(form) {
    return Array.prototype.some.call(form.querySelectorAll('input[type="file"]'), function (input) {
      return input.files && input.files.length > 0;
    });
  }

  function initForms() {
    if (!window.fetch || !window.FormData) return;

    document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
      var status = form.querySelector("[data-form-status]");
      var submitBtn = form.querySelector('[type="submit"]');

      function report(state, message) {
        if (!status) return;
        status.textContent = message;
        status.setAttribute("data-state", state);
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var data = new FormData(form);
        // An untouched file input still posts an empty file part, which a free
        // Formspree plan can reject as an upload — send only real attachments.
        form.querySelectorAll('input[type="file"]').forEach(function (input) {
          if (!input.files || input.files.length === 0) data.delete(input.name);
        });
        // Subject line carries the lead category so the inbox sorts itself.
        var category = data.get("Category");
        data.set("_subject", "New inquiry: " + (category || "General") + " (Dr. Reena Agrawal website)");

        if (submitBtn) submitBtn.disabled = true;
        report("pending", "Sending your inquiry…");

        postForm(form, data)
          .then(function (result) {
            if (result.ok) return { sent: true, droppedFile: false };
            var errors = (result.body && result.body.errors) || [];
            var captcha = errors.some(function (e) { return /captcha/i.test(e.code || e.message || ""); });
            if (captcha) {
              // The form has reCAPTCHA on, which only works as a normal page submit.
              HTMLFormElement.prototype.submit.call(form);
              return { sent: null };
            }
            if (hasAttachment(form)) {
              // Uploads need a paid Formspree plan — resend without the file so
              // the inquiry itself isn't lost.
              var withoutFile = new FormData(form);
              withoutFile.set("_subject", data.get("_subject"));
              form.querySelectorAll('input[type="file"]').forEach(function (input) { withoutFile.delete(input.name); });
              withoutFile.set("Attachment note", "Visitor attached a file that could not be uploaded; ask them to resend it.");
              return postForm(form, withoutFile).then(function (retry) {
                return { sent: retry.ok, droppedFile: retry.ok, errors: retry.body && retry.body.errors };
              });
            }
            return { sent: false, errors: errors };
          })
          .then(function (outcome) {
            if (outcome.sent === null) return;
            if (outcome.sent) {
              form.reset();
              report("success", outcome.droppedFile
                ? "Inquiry received — but the attachment couldn't be uploaded. Please WhatsApp it to +91 80802 12851."
                : "Thank you — your inquiry has been received. Dr. Agrawal's office will be in touch shortly.");
            } else {
              var detail = (outcome.errors || []).map(function (e) { return e.message; }).filter(Boolean).join(" ");
              report("notice", (detail ? detail + " " : "Your inquiry couldn't be sent. ") + "You can also " + CONTACT_FALLBACK + ".");
            }
          })
          .catch(function () {
            report("notice", "Network problem — your inquiry wasn't sent. Please try again, or " + CONTACT_FALLBACK + ".");
          })
          .then(function () {
            if (submitBtn) submitBtn.disabled = false;
          });
      });
    });
  }

  function initHeaderShrink() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var ticking = false;
    function update() {
      header.setAttribute("data-scrolled", window.scrollY > 24 ? "true" : "false");
      ticking = false;
    }
    update();
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  function initLightbox() {
    var lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    var closeBtn = lightbox.querySelector(".lightbox__close");
    var returnFocusTo = null;
    var img = null;

    // The <img> only exists while the lightbox is open: an idle img needs a
    // src, and src="" makes some browsers re-request the page as an image.
    function open(src, alt) {
      returnFocusTo = document.activeElement;
      img = document.createElement("img");
      img.className = "lightbox__img";
      img.src = src;
      img.alt = alt || "";
      lightbox.appendChild(img);
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function close() {
      lightbox.hidden = true;
      if (img) { img.remove(); img = null; }
      document.body.style.overflow = "";
      if (returnFocusTo && typeof returnFocusTo.focus === "function") returnFocusTo.focus();
      returnFocusTo = null;
    }

    document.querySelectorAll("[data-lightbox]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var innerImg = link.querySelector("img");
        open(link.getAttribute("href"), innerImg ? innerImg.alt : "");
      });
    });

    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) close();
    });
    document.addEventListener("keydown", function (event) {
      if (lightbox.hidden) return;
      if (event.key === "Escape") close();
      // The close button is the dialog's only control, so Tab stays on it.
      if (event.key === "Tab") {
        event.preventDefault();
        closeBtn.focus();
      }
    });
  }

  function initRevealOnScroll() {
    var targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach(function (el) { el.setAttribute("data-revealed", "true"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initForms();
    initHeaderShrink();
    initLightbox();
    initRevealOnScroll();
  });
})();
