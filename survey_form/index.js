function validateForm() {
    const name = document.getElementById('name');
    const last_name = document.getElementById('last_name');
    const email = document.getElementById('email');
    const age = document.getElementById('age');

    const nameError = document.getElementById('name_error');
    const lastNameError = document.getElementById('last_name_error');
    const emailError = document.getElementById('email_error');
    const ageError = document.getElementById('age_error');

    let isValid = true;

    if (name.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (last_name.value.trim().length < 3) {
        lastNameError.textContent = 'Last Name must be at least 3 characters';
        isValid = false;
    } else {
        lastNameError.textContent = '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    const ageValue = parseInt(age.value.trim());
    if (isNaN(ageValue) || ageValue < 2) {
        ageError.textContent = 'Age must be a valid number and at least 2';
        isValid = false;
    } else {
        ageError.textContent = '';
    }

    return isValid;
}

document.getElementById('form').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});