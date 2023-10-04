document.getElementById('emailForm').addEventListener('submit', function (e) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    // Check if the email input is valid
    if (!emailInput.checkValidity()) {
        e.preventDefault(); // Prevent form submission
        emailError.textContent = 'Check your email please';
        emailError.style.display = 'block';
    } else {
        emailError.textContent = ''; // Clear the error message
        emailError.style.display = 'none';
    }
});