document.addEventListener('DOMContentLoaded', () => {
    const pageTheme = '2025'; // Sets all pages to have this theme
    const pageStyling = ''; // Sets all pages to have this styling

    document.body.setAttribute('theme', pageTheme);
    document.body.setAttribute('styling', pageStyling);
    

    const navButtons = document.querySelectorAll('.navBar button');

    navButtons.forEach(button => {
        const originalButton = button.textContent;
        const newButton = originalButton.toLowerCase();

        button.addEventListener('mouseover', () => {
            button.textContent = `// ${newButton}`;
        });

        button.addEventListener('mouseout', () => {
            button.textContent = originalButton;
        });
    });
});

const repo = 'portfolio'; // Repo name

const navMap = {
    homeButton: `/${repo}/`,
    projectButton: `/${repo}/projectPage/`,
    aboutButton: `/${repo}/aboutPage/`,
    contactButton: `/${repo}/contactPage/`
};

Object.entries(navMap).forEach(([id, path]) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => {
        window.location.href = path;
    });
});