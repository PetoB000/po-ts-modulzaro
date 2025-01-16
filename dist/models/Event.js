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
    addParticipant(participant) {
        this.participants.set(participant.getName(), participant);
        participant.registerForEvent(this);
    }
    removeParticipant(participantName) {
        const participant = this.participants.get(participantName);
        if (participant) {
            participant.unregisterFromEvent(this.name);
            this.participants.delete(participantName);
        }
    }
    getParticipants() {
        return Array.from(this.participants.values());
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
