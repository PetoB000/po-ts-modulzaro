import { Participant } from "./Participant";
import { EventType } from "../types/EventType";

export class Event {
    private participants: Map<string, Participant> = new Map();

    constructor(
        private name: string,
        private location: string,
        private time: Date,
        private theme: EventType
    ) { }

    addParticipant(participant: Participant, skipRegistration: boolean = false): void {
        if (!this.participants.has(participant.getName())) {
            this.participants.set(participant.getName(), participant);
            if (!skipRegistration) {
                participant.registerForEvent(this, true);
            }
        }
    }

    removeParticipant(participantName: string, skipUnregistration: boolean = false): void {
        const participant = this.participants.get(participantName);
        if (participant) {
            if (!skipUnregistration) {
                participant.unregisterFromEvent(this.name, true);
            }
            this.participants.delete(participantName);
        }
    }

    getParticipants(): Participant[] {
        return Array.from(this.participants.values());
    }

    getName(): string {
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