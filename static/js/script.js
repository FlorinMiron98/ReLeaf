const navbar = document.querySelector(".navbar");
const contentWrapper = document.querySelector(".content-wrapper");
const navLinks = document.querySelectorAll(".nav-link");

const setDynamicPadding = function () {
  if (contentWrapper) {
    const header = document.querySelector("header");
    const sizes = navbar.getBoundingClientRect();
    header.style.paddingTop = `${sizes.height}px`;
    header.style.paddingBottom = `${sizes.height}px`;
  }
};

["DOMContentLoaded", "resize"].forEach((e) => {
  window.addEventListener(e, () => {
    setDynamicPadding();
  });
});
