const navSlide = () =>{
    const burger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.mobile-nav');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();