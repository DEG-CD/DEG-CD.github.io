document.addEventListener('click', ({ target }) => {
    if (!target.matches('#menu')) {
        document.getElementById("menu").classList.remove('show');
    }
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarResponsive = document.getElementById('menu');
        if (navbarResponsive.classList.contains('show')) {                        
            const navbarToggler = document.querySelector('.navbar-toggler');
            navbarToggler.click(); 
        }
    });
});