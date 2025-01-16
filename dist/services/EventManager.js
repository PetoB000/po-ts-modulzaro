"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
const Event_1 = require("../models/Event");
class EventManager {
    constructor() {
        this.events = [];
    }
    createEvent(name, location, time, theme) {
        const newEvent = new Event_1.Event(name, location, time, theme);
        this.events.push(newEvent);
        return newEvent;
    }
    deleteEvent(eventName) {
        this.events = this.events.filter(event => event.getEventDetails().name !== eventName);
    }
    getEventsByTheme(theme) {
        return this.events.filter(event => event.getEventDetails().theme === theme);
    }
    getAllEvents() {
        return this.events;
    }
}
exports.EventManager = EventManager;
