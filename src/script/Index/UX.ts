import Calendar from "./Calendar";

export function toggleNavbar(){
    const sections = document.querySelectorAll("section");
    const navBar = document.querySelector("nav");
    const hideNavBar = ()=>navBar.classList.add("hidden");
    const showNavBar = ()=>navBar.classList.remove("hidden");
    const options = {
        root: document.querySelector("scroll-container"),
        rootMargin: "0px",
        threshold: 1.0,
    }
    for(let i = 0; i < sections.length; i++) {
        if(i < 2) {
            new IntersectionObserver(hideNavBar, options).observe(sections[i]);
        } else {
            new IntersectionObserver(showNavBar, options).observe(sections[i]);
        }
    }
    hideNavBar();
    
}

export function initCalendar() {
    const calendar = new Calendar();
    calendar.init();
}


