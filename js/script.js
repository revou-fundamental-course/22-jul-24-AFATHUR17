document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const interest = document.querySelector('#interest ').value;

    if (!name || !email || !interest) {
        event.preventDefault();
        alert('please fill out all fields.')
    }
});

function toggleMenu() {
    var navlinks = document.getElementById("navlinks");
    navlinks,classList.toggle("active");
}
