import Calendar from "./Calendar";


export function toggleNavbar() {  
    const prayerSection = document.getElementById("prayer_section");
    const servicesSection = document.getElementById("services");
    const homeSection = document.getElementById("home");
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
    new IntersectionObserver(hideNavBar, options).observe(homeSection);

}

export function initCalendar() {
    const calendar = new Calendar();
    calendar.init();
}
