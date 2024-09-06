document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        alert('Please enter your full name.');
        isValid = false;
    }

    // Nick Name Validation
    const nickName = document.getElementById('nickName').value.trim();
    if (nickName === '') {
        alert('Please enter your nick name.');
        isValid = false;
    }

    // Date of Birth Validation
    const dob = document.getElementById('dob').value;
    if (dob === '') {
        alert('Please enter your date of birth.');
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('emailId').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Please select your gender.');
        isValid = false;
    }

    // Phone Number Validation
    const phoneNo = document.getElementById('phoneNo').value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNo)) {
        alert('Please enter a valid 10-digit phone number.');
        isValid = false;
    }

    // Address Validation
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        alert('Please enter your address.');
        isValid = false;
    }

    // City Validation
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        alert('Please enter your city.');
        isValid = false;
    }

    // Zip Code Validation
    const zipCode = document.getElementById('zipCode').value.trim();
    const zipPattern = /^[0-9]{5}$/; // Assuming 5-digit zip code
    if (!zipPattern.test(zipCode)) {
        alert('Please enter a valid 5-digit zip code.');
        isValid = false;
    }

    // If any field is invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});
