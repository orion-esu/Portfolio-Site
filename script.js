const navSlide = () =>{
    const burger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav-list li');
    const navIcon = document.querySelectorAll('.mobile-social-icons span');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7  + .5}s`;
            }
        });

        navIcon.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navIconFade 1.7s ease forwards ${index / 7  + 1}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

}

navSlide();