const form = document.querySelector(".contact-form");
const modal = document.querySelector(".modal");
const closeModalButton = modal.querySelector(".close-modal");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  modal.showModal();
});

closeModalButton.addEventListener("click", function () {
  modal.close();
});
