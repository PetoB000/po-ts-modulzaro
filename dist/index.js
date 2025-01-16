"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Participant_1 = require("./models/Participant");
const EventManager_1 = require("./services/EventManager");
const EventType_1 = require("./types/EventType");
// Create event manager
const eventManager = new EventManager_1.EventManager();
// Create some events
const birthdayParty = eventManager.createEvent("John's Birthday", "Central Park", new Date("2024-03-15"), EventType_1.EventType.BIRTHDAY);
const musicFestival = eventManager.createEvent("Summer Music Fest", "Beach Arena", new Date("2024-07-01"), EventType_1.EventType.FESTIVAL);
// Create participants
const alice = new Participant_1.Participant("Alice", "alice@email.com");
const bob = new Participant_1.Participant("Bob", "bob@email.com");
const charlie = new Participant_1.Participant("Charlie", "charlie@email.com");
// Register participants to events
alice.registerForEvent(birthdayParty);
bob.registerForEvent(birthdayParty);
charlie.registerForEvent(musicFestival);
alice.registerForEvent(musicFestival);
// Display results
console.log("Birthday Party Participants:", birthdayParty.getParticipants());
console.log("Music Festival Participants:", musicFestival.getParticipants());
console.log("Alice's registered events:", alice.getRegisteredEvents());
// Test removal
alice.unregisterFromEvent("John's Birthday");
console.log("\nAfter Alice unregistered from birthday:");
console.log("Birthday Party Participants:", birthdayParty.getParticipants());
