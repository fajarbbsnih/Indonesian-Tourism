document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav > ul > li');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });
        item.addEventListener('mouseleave', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const slideInterval = 5000; // Ganti dengan interval (ms) untuk perubahan slide

    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');
    setInterval(nextSlide, slideInterval);
});
