(function () {
    emailjs.init("Z9-i9UP5cOtikErVX"); // Remplacez YOUR_USER_ID par votre User ID EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Préparer les paramètres de l'email
    var templateParams = {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        message: document.getElementById('message').value
    };

    // Envoyer le formulaire en utilisant EmailJS
    emailjs.send('service_1ym6hol', 'template_7im9pdt', templateParams)
        .then(function () {
            alert('Votre message a été envoyé avec succès!');
        }, function (error) {
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        });
});