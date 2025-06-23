const setDynamicPadding = function (navbar, contentWrapper, header) {
  if (contentWrapper && navbar && header) {
    const sizes = navbar.getBoundingClientRect();
    header.style.paddingTop = `${sizes.height}px`;
    header.style.paddingBottom = `${sizes.height}px`;
  }
};

export default setDynamicPadding;
