document.getElementById("submitForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const errorElement = document.getElementById("error");
    const successElement = document.getElementById("success");
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
  
    // Validation: Check if required fields are filled
    if (name === "" || email === "") {
      errorElement.textContent = "Please fill in all required fields.";
      return;
    }
  
    errorElement.textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailRegex.test(email)) {
      errorElement.textContent = "Please enter a valid email address.";
      emailInput.focus();
      return false;
    }
  
    successElement.textContent = "Form submitted successfully!";
  });
  