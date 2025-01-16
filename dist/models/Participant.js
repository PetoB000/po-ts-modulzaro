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
    registerForEvent(event, skipAdd = false) {
        if (!this.registeredEvents.has(event.getName())) {
            this.registeredEvents.set(event.getName(), event);
            if (!skipAdd) {
                event.addParticipant(this, true);
            }
        }
    }
    unregisterFromEvent(eventName, skipRemove = false) {
        const event = this.registeredEvents.get(eventName);
        if (event) {
            if (!skipRemove) {
                event.removeParticipant(this.name, true);
            }
            this.registeredEvents.delete(eventName);
        }
    }
    getRegisteredEvents() {
        return Array.from(this.registeredEvents.values());
    }
}
exports.Participant = Participant;
