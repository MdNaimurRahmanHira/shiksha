 $(document).ready(function () {
     //  aos initializing start
     AOS.init({
         duration: 1000,
     })
     //  aos initializing end
 })


 let bar = document.querySelector('.navbar-toggler');
 let navigation = document.querySelector('.navigation-wrapper');
 bar.onclick = navmenu;

 function navmenu() {
     navigation.classList.toggle('show');
     bar.querySelector('i').classList.toggle('fa-bars');
     bar.querySelector('i').classList.toggle('fa-times');
 }


 // removing the scroll animation in small device
 window.onresize = function () {
     if (window.screen.width < 768) {
         let aos = document.querySelectorAll('[data-aos]');
         aos.forEach(function (e) {
            e.removeAttribute("data-aos");
            e.setAttribute('data-aos', 'fade-up');
        });
     }

 }
 if (window.screen.width < 768) {
    let aos = document.querySelectorAll('[data-aos]');
    aos.forEach(function (e) {
       e.removeAttribute("data-aos");
       e.setAttribute('data-aos', 'fade-up')
    });
}