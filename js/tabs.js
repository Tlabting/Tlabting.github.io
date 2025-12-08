function openTab(event, company) {
  event.preventDefault();
  const tabContent = document.querySelectorAll(".tab-content");
  const tabButton = document.querySelectorAll(".tab-btn");

  tabContent.forEach((content) => {
    content.style.display = "none";
  });

  tabButton.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(company).style.display = "block";
  event.currentTarget.classList.add("active");
}
