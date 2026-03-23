# csce477-hw3
Login page creation assignment for TAMU CSCE 477 Homework 3.

Content:

1. HTML Page
    - Starts with basic head / title, no css stylesheet.
    - Body first creates a container for all login elements.
    - Starts with header for login, then creates 2 seperate input boxes (1 email, 1 password).
    - Then creates a button for submitting the login credentials.
    - Finally creates an empty header for error or success messages to be displayed later.
    - Lastly, links to javascript file for logic.

2. JavaScript Logic
    - First checks to make sure HTML page built using an event listener for document creation.
    - Once page is built, gather the login button and message elements.
    - Add event listener to the button for when user submits credentials.
    - When user presses button, gather the email and password fields.
    - Then quickly reset the error message box (sanity check).
    - 3 quick logic checks:
        1. If email or password not filled out, display error.
        2. If email does not include @, display error.
        3. If password is smaller than 8 characters, display error.
    - After checks, credentials must have passed, so set message color to green and display "success".
    - For logging purposes, log the credentials to the console with message.