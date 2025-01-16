import { Event } from "../models/Event";
import { EventType } from "../types/EventType";

export class EventManager {
    private events: Event[] = [];

    createEvent(name: string, location: string, time: Date, theme: EventType): Event {
        const newEvent = new Event(name, location, time, theme);
        this.events.push(newEvent);
        return newEvent;
    }

    deleteEvent(eventName: string): void {
        this.events = this.events.filter(
            event => event.getEventDetails().name !== eventName
        );
    }

    getEventsByTheme(theme: EventType): Event[] {
        return this.events.filter(
            event => event.getEventDetails().theme === theme
        );
    }

    getAllEvents(): Event[] {
        return this.events;
    }
}
