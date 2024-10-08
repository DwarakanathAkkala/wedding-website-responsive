// Show Menu Bar

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
})


// Remove Menu Bar
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    nav.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// Change Active Link Color

const linkColor = document.querySelectorAll('.nav-link');
function colorLink() {
    if (colorLink) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active');
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink));


// Scroll to Top Button
const up = document.querySelector('.up');
window.addEventListener('scroll', () => {
    up.classList.toggle('show', window.scrollY >= 560);
    up.onclick = () => {
        window.scrollTo({ behavior: "smooth", top: "0" })
    }
})