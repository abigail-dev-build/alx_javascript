function validateEmail() {
    const emailInput = document.getElementById("email");
    const errorElement = document.getElementById("error");
  
    const email = emailInput.value;
  
    // Regular expression to check email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailRegex.test(email)) {
      errorElement.textContent = "Please enter a valid email address.";
      emailInput.focus();
      return false;
    }
  
    errorElement.textContent = "";
  
    return true;
  }
  