document.addEventListener('DOMContentLoaded', () => {               // Check if page is built

    const loginButton = document.getElementById('loginButton');     // If so, gather login and message elements
    const message = document.getElementById('message');

    loginButton.addEventListener('click', function() {              // Wait for user to press login button

        const email = document.getElementById('email').value;       // Once pressed, gather the email and password fields
        const password = document.getElementById('password').value;

        message.innerHTML = "";                                     // Reset message box (sanity check)
        message.style.color = "red";

        if (!email || !password) {
            message.innerHTML = "Please fill out all fields.";      // Check if any fields are blank, display error if so
            return;
        }

        if (!email.includes('@')) {
            message.innerHTML = "Please enter a valid email address.";  // Check if email has no @, display error if so
            return;
        }

        if (password.length < 8) {
            message.innerHTML = "Password must be at least 8 characters long."; // Check if password is less than 8 characters, display error if so
            return;
        }

        message.style.color = "green";              // Assuming these checks pass, change message to a green success
        message.innerHTML = "Login successful! Welcome: " + email;
        
        console.log("Successful login with credentials: ", { email, password });    // Log event in console
    });
});