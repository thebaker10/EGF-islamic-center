export interface CalendarData {
    kind?:             string;
    etag?:             string;
    summary?:          string;
    updated?:          Date;
    timeZone?:         string;
    accessRole?:       string;
    defaultReminders?: any[];
    nextSyncToken?:    string;
    items?:            Item[];
}

export interface Item {
    kind?:      string;
    etag?:      string;
    id?:        string;
    status?:    string;
    htmlLink?:  string;
    created?:   Date;
    updated?:   Date;
    summary?:   string;
    creator?:   Creator;
    organizer?: Organizer;
    start?:     End;
    end?:       End;
    iCalUID?:   string;
    sequence?:  number;
    eventType?: string;
}

export interface Creator {
    email?: string;
}

export interface End {
    dateTime?: Date;
}

export interface Organizer {
    email?:       string;
    displayName?: string;
    self?:        boolean;
}
