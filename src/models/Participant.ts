import { Event } from "./Event";

export class Participant {
    private registeredEvents: Map<string, Event> = new Map();

    constructor(
        private name: string,
        private contactInfo: string
    ) { }

    getName(): string {
        return this.name;
    }
    
    getContactInfo(): string {
        return this.contactInfo;
    }

    registerForEvent(event: Event): void {
        this.registeredEvents.set(event.getEventDetails().name, event);
        event.addParticipant(this);
    }

    unregisterFromEvent(eventName: string): void {
        const event = this.registeredEvents.get(eventName);
        if (event) {
            event.removeParticipant(this.name);
            this.registeredEvents.delete(eventName);
        }
    }

    getRegisteredEvents(): Event[] {
        return Array.from(this.registeredEvents.values());
    }
}