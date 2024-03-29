import { useState } from "react";
import EventItem from "./components/EventItem";
import eventJSON from "../../data/events.json";

const Events = ({ searchTerm }) => {
    const [data] = useState(eventJSON);
    const events = data._embedded.events;

    const handleEventItemClick = (id) => {
        console.log('evento clickeado', id);
    }

    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
            console.log('se filtra')
        }

        return eventsFiltered.map((eventItem) => (
            <EventItem
                key={`event-item-${eventItem.id}`}
                name = {eventItem.name}
                info = {eventItem.info}
                image = {eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                id={eventItem.id}
            />
        ))
    }

    return (
        <div>
           events
           {renderEvents()}
        </div>
    )
}

export default Events;
