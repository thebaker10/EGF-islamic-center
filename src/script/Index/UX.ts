import Calendar from "./Calendar";


export function initCalendar() {
    const calendar = new Calendar();
    calendar.init();
}

export function switchResources() {
    const tabs:NodeListOf<HTMLDivElement> = document.querySelectorAll(".tab");
    const explanations = document.querySelectorAll(".explanation");
    let currentTab = 0;
    
    tabs.forEach((tab,i) => tab.addEventListener("click",()=>{
        clearInterval(autoTabSwitcher);
        switchTab(i)
    }));
    

    
    const autoTabSwitcher = setInterval(() =>{
        if(currentTab < 4) currentTab++;
        else currentTab = 0;

        switchTab(currentTab);
    }, 4000);

    function switchTab(tabNumber) {
        removeAllSelected();
        tabs[tabNumber].classList.add("selected");
        explanations[tabNumber].classList.add("selected");
    }

    function removeAllSelected() {
        tabs.forEach(tab=>tab.classList.remove("selected"))
        explanations.forEach(explanation=>explanation.classList.remove("selected"))
    }
}

