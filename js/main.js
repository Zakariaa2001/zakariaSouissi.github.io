let main_nav = document.querySelector('header .main-nav');
let links = document.querySelector('.links');
let nav_toggle = document.querySelector('.nav_btns .nav_toggle i');
let btn_close = document.querySelector('.nav_btns  #nav-close');
let icon = document.querySelector('header nav .icon ');
let moon = document.querySelector('header .nav_btns #moon');
let header = document.querySelector('header');
let dropdown = document.querySelectorAll('.skills .skills-content .btn-drop');
let downIcon = document.querySelectorAll('.skills .skills-content button .downIcon')
nav_toggle.addEventListener('click', (e) => {
    links.classList.add('active');
    btn_close.classList.add('margineTop');
    btn_close.classList.remove('d-none');
    nav_toggle.classList.add('d-none');
    icon.classList.add('activeD');
    main_nav.classList.add('color');
    header.style.height = "35%";
})
btn_close.addEventListener('click', (e) => {
    links.classList.remove('active');
    btn_close.classList.remove('margineTop');
    btn_close.classList.add('d-none');
    nav_toggle.classList.remove('d-none');
    icon.classList.remove('activeD');
    main_nav.classList.remove('color');
    header.style.height = "12%";

})
// dark mode
moon.addEventListener('click', (e) => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        moon.classList = "fa-solid fa-sun  fs-5 mt-2"
    } else {
        moon.classList = "fa-solid fa-moon fs-5 mt-2";
    }

});
// dropdown
for (let i = 0; i < dropdown.length; i++) {
    for (let y = 0; y <= downIcon.length; y++) {
        dropdown[i].addEventListener('click', (e) => {
            if (downIcon[i].classList.contains("fa-angle-down")) {
                downIcon[i].classList.remove("fa-angle-down");
                downIcon[i].classList.add("fa-angle-up");
            } else {
                downIcon[i].classList.remove("fa-angle-up");
                downIcon[i].classList.add("fa-angle-down");
            }
        })
    }
}
// take place
var containers = document.querySelectorAll('.dropdown-container');

containers.forEach(function (container) {
    var menu = container.querySelector('.dropdown-menu');

    container.addEventListener('click', function () {
        // Get the height of the menu
        var menuHeight = menu.scrollHeight;

        // Set the height of the container to match the menu height
        container.style.height = menuHeight + 'px';

        // Show the menu by setting its opacity to 1
        menu.style.opacity = 1;
    });
});
// section 
let skillsSpan = document.querySelectorAll(".skills .skills-content .show-skills li span");
skillsSpan.forEach((span) => {
    span.style.width = span.dataset.width;
});
// active scrool
let skills = document.getElementById('skills');
let box = document.querySelectorAll('.skills .timeLine .box');
let timeLineAf = document.querySelector('.skills .timeLine');
let spanUp = document.querySelector(".spanup");
window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop) {
        for (let i = 0; i < box.length; i++) {
            box[i].classList.add("activeAnimation");
            console.log(box[i]);
        }
        timeLineAf.classList.add("animate");
    }
    // show up
    this.scrollY >= 700 ? spanUp.classList.add('show-up') : spanUp.classList.remove('show-up')
}
spanUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

