console.log("JavaScript is working!");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("input", () => validateField(input));
    });

    function validateField(input) {
        let errorMessage = "";
        
        if (input.name === "Nom" || input.name === "Prenom") {
            if (input.value.length < 3) {
                errorMessage = "Le champ doit contenir au moins 3 caractères.";
            }
        } else if (input.name === "Email") {
            const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(input.value)) {
                errorMessage = "Veuillez entrer une adresse e-mail valide.";
            }
        } else if (input.name === "Mot de passe") {
            const passwordPattern = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/;
            if (!passwordPattern.test(input.value)) {
                errorMessage = "Le mot de passe doit contenir au moins 6 caractères, une majuscule, un chiffre et un caractère spécial.";
            }
        } else if (input.name === "Code postal") {
            if (input.value.length !== 5 || isNaN(input.value)) {
                errorMessage = "Veuillez entrer un code postal valide à 5 chiffres.";
            }
        }

        displayError(input, errorMessage);
    }

    function displayError(input, message) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains("error")) {
            errorElement = document.createElement("div");
            errorElement.classList.add("error");
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
    }
});
