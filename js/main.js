var element_ul = document.querySelector('.header__ul');
var element_icon1 = document.querySelector(' .fa-bars-staggered');
var element_icon2 = document.querySelector('.fa-xmark');
var elemnent_header__content = document.querySelector('.header__content');
var element_home = document.querySelector('.home');


if (window.innerWidth > 991) {
    element_icon1.style.display = "none";
    element_icon2.style.display = "none";
} else {
    element_icon1.style.display = "block";
    
}
 
element_icon1.addEventListener("click", () => {
    if (window.innerWidth <= 991) {
        elemnent_header__content.classList.add('header__content--pd');
        element_ul.classList.add('header__ul--block');
        element_icon1.style.display = "none";
        element_icon2.style.display = "block";
        element_home.style.marginTop = "-455px";
    } 
})
element_icon2.addEventListener("click", () => {
    if (window.innerWidth <= 991) {
        elemnent_header__content.classList.remove('header__content--pd');
        element_ul.classList.remove('header__ul--block');
        element_icon1.style.display = "block";
        element_icon2.style.display = "none";
        element_home.style.marginTop = "-80px";
    } 
})