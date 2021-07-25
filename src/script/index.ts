export function IndexFunctions() {
    _toggleNavbar();
}


//turn on and off the navbar
function _toggleNavbar() {  
    const prayerSection = document.getElementById("prayer_section");
    const servicesSection = document.getElementById("services");
    const navBar = document.querySelector("nav");
    const hideNavBar = ()=>navBar.classList.add("hidden");
    const showNavBar = ()=>navBar.classList.remove("hidden");
    const options = {
        root: document.querySelector("scroll-container"),
        rootMargin: "0px",
        threshold: 1.0,
    }

    new IntersectionObserver(showNavBar ,options).observe(prayerSection);
    new IntersectionObserver(hideNavBar, options).observe(servicesSection);

    //fixing a bug where it would not hide the navbar on the home section
    hideNavBar();
}