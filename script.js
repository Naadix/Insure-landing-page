const humburger = document.querySelector('.humburger');
const bars = document.querySelector('.bars');
const close = document.querySelector('.close');
const listIems = document.querySelector('#header .navbar nav ul');
const links = document.querySelectorAll('#header .navbar nav ul li a');

// Animation of navBar
humburger.addEventListener('click', function () {
    close.classList.toggle('active');
    bars.classList.toggle('active');
    listIems.classList.toggle('active');
});
// Adjust of navlinks 
links.forEach(link => (
    link.addEventListener('click', () => {
        listIems.classList.remove('active');
        close.classList.remove('active');
        bars.classList.add('active');
    })
));