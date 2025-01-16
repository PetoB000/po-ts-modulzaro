"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(name, location, time, theme) {
        this.name = name;
        this.location = location;
        this.time = time;
        this.theme = theme;
        this.participants = new Map();
    }
    addParticipant(participant, skipRegistration = false) {
        if (!this.participants.has(participant.getName())) {
            this.participants.set(participant.getName(), participant);
            if (!skipRegistration) {
                participant.registerForEvent(this, true);
            }
        }
    }
    removeParticipant(participantName, skipUnregistration = false) {
        const participant = this.participants.get(participantName);
        if (participant) {
            if (!skipUnregistration) {
                participant.unregisterFromEvent(this.name, true);
            }
            this.participants.delete(participantName);
        }
    }
    getParticipants() {
        return Array.from(this.participants.values());
    }
    getName() {
        return this.name;
    }
    getEventDetails() {
        return {
            name: this.name,
            location: this.location,
            time: this.time,
            theme: this.theme,
            participantCount: this.participants.size
        };
    }
}
exports.Event = Event;
