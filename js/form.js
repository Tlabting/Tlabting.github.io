const form = document.querySelector(".contact-form");
const modal = document.querySelector(".modal");
const closeModalButton = modal.querySelector(".close-modal");
const fields = [
  { id: "name", errorMessage: "Please enter a valid name." },
  { id: "email", errorMessage: "Please enter a valid email." },
  { id: "phone-number", errorMessage: "Please enter a valid phone number." },
  { id: "message", errorMessage: "Please enter a message." },
];

function validateFields(item) {
  const input = document.getElementById(item.id);
  const elementError = document.getElementById(item.id + "-error");
  let message = "";

  const value = input.value.trim();

  switch (item.id) {
    case "name":
      if (!value || !/^[A-Za-z ,'-.]+$/.test(value)) {
        message = item.errorMessage;
      }
      break;
    case "email":
      if (!value || input.validity.typeMismatch) {
        message = item.errorMessage;
      }
      break;
    case "phone-number":
      if (input.validity.patternMismatch) {
        message = item.errorMessage;
      }
      break;
    case "message":
      if (!value) {
        message = item.errorMessage;
        break;
      }
  }

  if (elementError) {
    elementError.textContent = message;
  }

  if (message) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", function (event) {
  let hasError = false;

  fields.forEach((item) => {
    const errorFlagged = validateFields(item);
    if (errorFlagged) hasError = true;
  });

  event.preventDefault();

  if (!hasError) {
    modal.showModal();
  } else {
    return;
  }
});

closeModalButton.addEventListener("click", function () {
  modal.close();
});
