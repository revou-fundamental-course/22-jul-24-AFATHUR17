document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const interest = document.querySelector('#interest ').value;

    if (!name || !email || !interest) {
        event.preventDefault();
        alert('please fill out all fields.')
    }
});

const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes('${activePage}')){
        link.classList.add('active');
    }
})
