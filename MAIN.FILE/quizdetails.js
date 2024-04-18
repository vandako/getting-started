document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validation messages
    let messages = [];
    if (name === '' || name === null) {
        messages.push("Name is required");
    }

    if (email === '' || email === null) {
        messages.push("Email is required");
    }

    if (messages.length > 0) {
        // Display validation messages
        alert(messages.join("\n"));
        return; // Exit the function if validation fails
    }

    // Store name and email in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    
    // Redirect to the quizapp page
    window.location.href = "quizapp.html"; // Assuming quizapp.html is the correct page
});