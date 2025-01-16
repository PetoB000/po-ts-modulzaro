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

    registerForEvent(event: Event, skipAdd: boolean = false): void {
        if (!this.registeredEvents.has(event.getName())) {
            this.registeredEvents.set(event.getName(), event);
            if (!skipAdd) {
                event.addParticipant(this, true);
            }
        }
    }

    unregisterFromEvent(eventName: string, skipRemove: boolean = false): void {
        const event = this.registeredEvents.get(eventName);
        if (event) {
            if (!skipRemove) {
                event.removeParticipant(this.name, true);
            }
            this.registeredEvents.delete(eventName);
        }
    }

    getRegisteredEvents(): Event[] {
        return Array.from(this.registeredEvents.values());
    }
}