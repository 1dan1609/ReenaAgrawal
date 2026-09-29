/* Root page: hero seal "stamps down" once on load. */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var seal = document.querySelector(".passport-seal");
    if (!seal) return;
    requestAnimationFrame(function () {
      seal.style.transition = "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease";
    });
  });
})();
