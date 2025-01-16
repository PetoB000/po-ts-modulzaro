import { Participant } from "./Participant";
import { EventType } from "../types/EventType";

export class Event {
    private participants: Map<string, Participant> = new Map();

    constructor(
        private name: string,
        private location: string,
        private time: Date,
        private theme: EventType
    ) {}

    addParticipant(participant: Participant): void {
        this.participants.set(participant.getName(), participant);
    }

    removeParticipant(participantName: string): void {
        this.participants.delete(participantName);
    }

    getParticipants(): Participant[] {
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