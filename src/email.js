(function () {
    emailjs.init('ZwMLv5C59XTowoln7');
})();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if(!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const params = {
            name: form.name.value.trim(),
            message: form.message.value.trim(),
            email: form.email.value.trim()
        };

        if(!params.name || !params.message || !params.email){
            alert("Please fill out all fields!");
            return;
        }

        emailjs.send(
            "service_uq7quzo",
            "template_7bcvqzg",
            params
        ).then(() => {
            alert("Message sent!");
            form.reset();
        }).catch(err => {
            alert("Failed to send message :(");
            console.error("EmailJS Error", err);
        });
    });
});