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
    });
})