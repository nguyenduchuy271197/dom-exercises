const accordionItemEls = document.querySelectorAll(
  "#accordion .accordion-item"
);

for (let i = 0; i < accordionItemEls.length; i++) {
  const accordionBtnEl = accordionItemEls[i].querySelector(".accordion-button");
  const accordionCollapseEl = accordionItemEls[i].querySelector(
    ".accordion-collapse"
  );

  accordionBtnEl.addEventListener("click", function () {
    accordionCollapseEl.classList.toggle("show");
  });
}
