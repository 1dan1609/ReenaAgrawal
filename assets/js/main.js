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

  function initForms() {
    document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        var endpoint = form.getAttribute("action") || "";
        var placeholder = endpoint.indexOf("YOUR_FORM_ID") !== -1;
        if (placeholder) {
          event.preventDefault();
          var status = form.querySelector("[data-form-status]");
          if (status) {
            status.textContent =
              "This form isn't wired to a live inbox yet — swap the Formspree ID in " +
              form.getAttribute("data-lead-form") +
              " to start receiving these leads by email.";
            status.setAttribute("data-state", "notice");
          }
          return;
        }
        var statusOk = form.querySelector("[data-form-status]");
        if (statusOk) {
          statusOk.textContent = "Sending your inquiry…";
          statusOk.setAttribute("data-state", "pending");
        }
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
