document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedback-form");

  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      event.preventDefault();
    } else {
      alert("Thank you for your feedback!");
    }
  });
});
