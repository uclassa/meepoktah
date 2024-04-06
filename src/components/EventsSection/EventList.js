import React from 'react'
import {
    EventsCardWrapper,
    EventsCard,
    EventsPhoto,
    EventsTextWrapperCol,
    EventsDatePlace,
    EventsTitle,
    EventsDescription
} from './EventElements'

const EventDate = (start, end) => {
    if (end === null){
        return new Date(start).toDateString();
    }
    else{
        return new Date(start).toDateString() + " - " + new Date(end).toDateString();
    }
}

const EventList = (props) => {
  const {events} = props;
  return (
    <EventsCardWrapper>
        {
            events.map((data, index) => {
                
                let imageID = import.meta.env.VITE_DEFAULT_EVENT_IMAGE_ID;
                if (data.image != null){
                    imageID = data.image;
                }

                const imageLink = "https://lh3.googleusercontent.com/u/0/d/" + imageID;

                const dateString = EventDate(data.start_date, data.end_date);

                return(
                    <EventsCard key={index}>
                        <EventsPhoto src={imageLink} alt="Picture of event"/>
                        <EventsTextWrapperCol href={data.link} target="_blank">
                            <EventsDatePlace> {dateString} | {data.venue}</EventsDatePlace>
                            <EventsTitle>{data.title}</EventsTitle>
                            {
                                new Date(data.start_date) > new Date() ?
                                <EventsDescription>{data.description}</EventsDescription> : null
                            }
                        </EventsTextWrapperCol>
                    </EventsCard>
                )}
            )
        }
    </EventsCardWrapper>
  )
}

export default EventList