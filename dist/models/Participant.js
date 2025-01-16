"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
class Participant {
    constructor(name, contactInfo) {
        this.name = name;
        this.contactInfo = contactInfo;
        this.registeredEvents = new Map();
    }
    getName() {
        return this.name;
    }
    getContactInfo() {
        return this.contactInfo;
    }
    registerForEvent(event) {
        this.registeredEvents.set(event.getEventDetails().name, event);
        event.addParticipant(this);
    }
    unregisterFromEvent(eventName) {
        const event = this.registeredEvents.get(eventName);
        if (event) {
            event.removeParticipant(this.name);
            this.registeredEvents.delete(eventName);
        }
    }
    getRegisteredEvents() {
        return Array.from(this.registeredEvents.values());
    }
}
exports.Participant = Participant;
