const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open') // when the menu button is clicked, it will toggle the window for available options to navigate to
});

navLinks.forEach(link => {
    link.addEventListener('click', () => { // when the available option is clicked, it will close the toggle window
        document.body.classList.remove('nav-open')
    })
});