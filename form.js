/*document.addEventListener("DOMContentLoaded", function() {
    let emailForm = document.getElementById("emailForm");
    let passwordForm = document.getElementById("passwordForm");
    let emailInput = document.getElementById("emailInput");
    let passwordInput = document.getElementById("passwordInput");
    let nextButton = document.getElementById("nextButton");

    

    nextButton.addEventListener("click", function() {
        let email = emailInput.value.trim();
        if (email === "") {
            alert("Please enter your email before proceeding.");
            return;
            
        }

        emailForm.style.display = "none";
        passwordForm.style.display = "block";
        
    });

    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let password = passwordInput.value.trim();
        if (password === "") {
            alert("Please enter your password before submitting.");
            return;

        }
        if (password.length < 6) {
            alert("Password should have at least 6 characters.");
            return;
        }
        
        

        
        alert("Form submitted successfully!");
    
    window.location.href = "http://127.0.0.1:5500/course.html";
  });
});
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password validation function
function validatePassword() {
    let password = document.getElementById("passwordInput").value.trim();
    if (password.length < 6) {
        alert("Password should have at least 6 characters.");
        return false;
    }
    return true;
}

// Form validation function
function validateForm() {
    let email = document.getElementById("emailInput").value.trim();
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}*/

document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const nextButton = document.getElementById("nextButton");

    

    nextButton.addEventListener("click", function() {
        
        const email = emailInput.value;
        if (!isValidEmail(email)) {
            emailError.textContent = "Invalid email";
        } else {
            emailError.textContent = "";
            
        }

        
        
        if (!email === "" && email === "example@example.com") {
            alert("Sign up successful!");
            
        } 
        
        signupForm.style.display = "none";
        passwordForm.style.display = "block";
    
    
    });
    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let password = passwordInput.value.trim();
        if (!password === "" && password.length >= 6) {
            alert("successful.");
            return;
        }
    });

    function isValidEmail(email) {
        // Basic email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});