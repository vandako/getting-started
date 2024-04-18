
/*document.addEventListener("DOMContentLoaded", function() {
    let loginForm = document.getElementById("loginForm");
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let passwordInput = document.getElementById("passwordInput");
    let phoneInput = document.getElementById("phoneInput");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        let phone = phoneInput.value.trim();

        if (name === "") {
            alert("Please enter your name before submitting.");
            return;
        }

        if (email === "") {
            alert("Please enter your email before submitting.");
            return;
        }

        if (password === "") {
            alert("Please enter your password before submitting.");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number before submitting.");
            return;
        }

        
        alert("Form submitted successfully!");
        window.location.href = "http://127.0.0.1:5500/course.html";
    });
});*/
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for now

        // Perform authentication here
        const email = emailInput.value;
        const password = passwordInput.value;
        // Example authentication code (replace with your own logic)
        if (email === "example@example.com" && password.length >= 6) {
            alert("Login successful!");
            // Redirect or do something else after successful login
        } else {
            alert("Login failed. Please check your email and password.");
        }
    });
});
