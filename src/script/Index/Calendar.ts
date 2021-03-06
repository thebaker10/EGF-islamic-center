import { Event } from "../types/Event";
import CalendarEventService from "./../Services/CalenderAPIService";

export default class Calendar {
    private eventsCon = document.querySelector(".events");
    private daysEle:HTMLSpanElement[] = new Array<HTMLSpanElement>();
    private daysUntilToday = 0;
    

    async init() {
        try {
            const date = new Date();
            const events = await new CalendarEventService().getEvents();
            const monthNameEle:HTMLDivElement = document.querySelector(".calender_nav .date");
            this.generateCalendarDays()
            if(events.length > 0) {
                for(let event of events) {
                    this.makeEventCard(event);
                    if(event.date.getMonth() === date.getMonth()) {
                        this.markCalendarDay(event.date.getDate());
                    }
                }
            } else {
                const event:Event = {
                    name:"Sorry, there are no upcoming events",
                    date: new Date()
                }
                this.makeEventCard(event);
            }
            
            this.renderCalendar();
            monthNameEle.innerText = `${this.monthToString(date.getMonth())} ${date.getFullYear()}`
        } catch(err) {
            console.error(err);
            const event:Event = {
                name:"Sorry, something went wrong on our end!",
                date: new Date()
            }
            this.makeEventCard(event);
        }
        
    }

    private generateCalendarDays() {
        const date = new Date();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
        const firstDayOfMonth= new Date(date.getFullYear(), date.getMonth(), 1);
        this.fillDaysUntilFirst(firstDayOfMonth.getDay());
        for(let i = 1; i<=daysInMonth; i++) {
            const ele = document.createElement("span");
            ele.innerText = i.toString();
            this.daysEle.push(ele);
        }
    }   

    private fillDaysUntilFirst(firstDay:number) {
        if(firstDay==0) return;
        this.addDisabledDays(firstDay);
        this.daysUntilToday = firstDay;
    }

    private addDisabledDays(amount:number) {
        for(let i = 1; i<=amount; i++) {
            const span = document.createElement("span");
            span.classList.add("disabled");
            this.daysEle.push(span);
        }
    }

    private markCalendarDay(dayNumber:number) {
        this.daysEle[dayNumber-1+this.daysUntilToday].classList.add("highlight");
    }


    private renderCalendar() {
        const gridEle = document.querySelector(".grid");
        for(let span of this.daysEle) {
            gridEle.appendChild(span);
        }

    }

    
    private makeEventCard(event:Event) {
        const eventEle = document.createElement("div");
        const dayNumberEle = document.createElement("div");
        const dateEle = document.createElement("div");
        const monthYearEle = document.createElement("div");
        const dayNameEle = document.createElement("div");
        const titleEle = document.createElement("div");
        
        eventEle.classList.add("event");
        dayNumberEle.classList.add("dayNumber");
        dateEle.classList.add("date");
        monthYearEle.classList.add("monthYear");
        dayNameEle.classList.add("dayName");
        titleEle.classList.add("title");

        eventEle.appendChild(dayNumberEle);
        dateEle.appendChild(monthYearEle);
        dateEle.appendChild(dayNameEle);
        eventEle.appendChild(dateEle);
        eventEle.appendChild(titleEle);



        dayNumberEle.innerText = event.date.getDate().toString();
        monthYearEle.innerText = `${this.monthToString(event.date.getMonth())} ${event.date.getFullYear()}`
        dayNameEle.innerText = this.dayToString(event.date.getDay());
        titleEle.innerHTML = `${event.name}<br>${this.timeToString(event.date)}`;

        this.eventsCon.appendChild(eventEle);
    }

    //convert a month number to a string
    private monthToString(month:number) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month];
    }

    //convert a day number to a string 
    private dayToString(day:number) {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }

    // convert date to 12 hour format
    private timeToString(date:Date) {
        let hours = date.getHours();
        const period = hours >= 12 ? "pm" : "am";
        hours = hours >= 12 ? hours - 12 : hours;
        const minutes = date.getMinutes();
        let timeString = `${hours}:${minutes} ${period}`;
        
        
        if(hours < 10) {
            timeString = `0${timeString}`;
        }
        return timeString;
    }
    

}