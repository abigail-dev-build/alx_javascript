function validatePassword() {
    const passwordInput = document.getElementById("password");
    const errorElement = document.getElementById("error");
  
    const password = passwordInput.value;

    // Regular expressions to check password criteria
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
  
    // Check each password criteria
    if (!lengthRegex.test(password)) {
      errorElement.textContent = "Password must be at least 8 characters long.";
      return false;
    } else if (!uppercaseRegex.test(password)) {
      errorElement.textContent = "Password must contain at least one uppercase letter.";
      return false;
    } else if (!lowercaseRegex.test(password)) {
      errorElement.textContent = "Password must contain at least one lowercase letter.";
      return false;
    } else if (!digitRegex.test(password)) {
      errorElement.textContent = "Password must contain at least one numeric digit.";
      return false;
    } else if (!specialCharRegex.test(password)) {
      errorElement.textContent = "Password must contain at least one special character.";
      return false;
    }
  
    // Clear any previous error messages
    errorElement.textContent = "";
  
    return true; // Allow form submission if all criteria are met
  }

  