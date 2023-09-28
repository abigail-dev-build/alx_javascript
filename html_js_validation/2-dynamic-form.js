function generateInputFields(selectedValue) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";
  
    for (let i = 1; i <= selectedValue; i++) {
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.name = `field${i}`;
      inputField.placeholder = `Field ${i}`;
      inputContainer.appendChild(inputField);
    }
  }
  
  function validateForm() {
    const selectedValue = document.getElementById("numFields").value;
    const errorElement = document.getElementById("error");
  
    // Check if any dynamically generated fields are empty
    for (let i = 1; i <= selectedValue; i++) {
      const inputField = document.getElementsByName(`field${i}`)[0];
      if (inputField.value.trim() === "") {
        errorElement.textContent = "Please fill in all fields.";
        inputField.focus();
        return false;
      }
    }

    errorElement.textContent = "";
  
    return true;
  }
  
  document.getElementById("numFields").addEventListener("change", function () {
    const selectedValue = this.value;
    generateInputFields(selectedValue);
  });
  