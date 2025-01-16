
import { Participant } from "./models/Participant";
import { EventManager } from "./services/EventManager";
import { EventType } from "./types/EventType";


const eventManager = new EventManager();
const birthdayParty = eventManager.createEvent(
    "valami szülinap",
    "valahol",
    new Date("2024-03-15"),
    EventType.BIRTHDAY
);

const musicFestival = eventManager.createEvent(
    "valami fesztivál",
    "valahol 2",
    new Date("2024-07-01"),
    EventType.FESTIVAL
);


const someone = new Participant("valaki", "valakiemail");
const someone2 = new Participant("valaki 2", "valakiemail 2");
const someone3 = new Participant("valaki 3", "valakiemail 3");

someone.registerForEvent(birthdayParty);
someone2.registerForEvent(birthdayParty);
someone3.registerForEvent(musicFestival);
someone.registerForEvent(musicFestival);

console.log("szülinapon vannak:", birthdayParty.getParticipants());
console.log("fesztiválon vannak:", musicFestival.getParticipants());
console.log("valaki eventjei:", someone.getRegisteredEvents());


someone.unregisterFromEvent("valami szülinap");
console.log("\n Valaki kivétele szülinapból:");
console.log("szülinapon:", birthdayParty.getParticipants());
