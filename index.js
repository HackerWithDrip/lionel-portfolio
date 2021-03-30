const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__list')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open') // when the menu button is clicked, it will toggle the window for available options to navigate to
});

navLinks.addEventListener('click', () => {
    document.body.classList.remove('nav-open') // when the link (available options)is clicked, it will close the toggle window and navigate the page to the topic (depending on the link you clicked) you clicked.
});