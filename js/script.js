function userScroll() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-dark');
            // navbar.classList.add('bg-light');
            // navbar.classList.add('navbar-stick');
        }
        else {
            navbar.classList.remove('bg-dark');
            // navbar.classList.add('bg-light');
            // navbar.classList.add('navbar-stick');
        }
    })
}

document.addEventListener("DOMContentLoaded", userScroll)