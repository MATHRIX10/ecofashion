menu = document.querySelector('#menu-bars')
navbar = document.querySelector(".navbar");

menu.addEventListener('click' , ()=>{

    navbar.classList.toggle('active')
    menu.classList.toggle('fa-window-close')

})


window.onscroll = () => {
    if (window.scrollY>1000){
        navbar.classList.remove("active");
        menu.classList.remove("fa-window-close");
    }
    
}