import { CalendarData } from '../types/CalendarData';
import {Event} from "../types/Event";

export default class CalendarAPIService {

    private readonly apiKey = "AIzaSyD227OlDj5joTJ_SlnqDXwkOMQs-eKLLoU";
    private readonly calendarID = "3oj3bhd9q6325maglm0i8srom4@group.calendar.google.com";
    private readonly maxResults = 4;


    async getEvents():Promise<Event[]> {
        const data = await this.getDataFromAPI();
        const events = this.convertData(data);
        return events;
    }


    private async getDataFromAPI():Promise<CalendarData> {
        const date = new Date().toISOString();
        let calendarData:CalendarData = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${this.calendarID}/events?maxResults=${this.maxResults}&orderBy=startTime&singleEvents=True&timeMin=${date}&key=${this.apiKey}`)
                                              .then(body=>body.json());
        return calendarData;
    }


    private convertData(data:CalendarData):Event[] {
        const events:Event[] = new Array<Event>();
        for(let item of data.items) {
            const event:Event = {
                date: new Date(item.start.dateTime),
                name: item.summary
            }
            events.push(event);
        }

        return events;

    }

}

