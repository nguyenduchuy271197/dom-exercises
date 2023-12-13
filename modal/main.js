const modalEl = document.getElementById("modal");

function openModal() {
  modalEl.classList.add("show");
}

function closeModal() {
  modalEl.classList.remove("show");
}

document.addEventListener("click", function (e) {
  if (e.target === modalEl) {
    closeModal();
  }
});
