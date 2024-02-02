import React from 'react'
import {
    EventsCardWrapper,
    EventsCard,
    EventsPhoto,
    EventsTextWrapperCol,
    EventsDatePlace,
    EventsTitle,
    EventsDescription,
    BtnWrap,
    ArrowRight
} from './EventElements'

const EventList = (props) => {
  const {events} = props;
  return (
    <EventsCardWrapper>
        {
            events.map((data, index) => {

                let id = "1bw8MB_HJxJhn5UuPD6Kv4t6hgoEWnDTM";
                if (data.image != null){
                    id = data.image.split("/")[5].slice(10);
                }
                const imageLink = "https://lh3.google.com/u/0/d/" + id;

                return(
                    <EventsCard key={index}>
                        <EventsPhoto src={imageLink} alt="Picture of event"/>
                        <EventsTextWrapperCol href={data.link} target="_blank">
                            <EventsDatePlace>{new Date(data.date).toDateString()} | {data.address}</EventsDatePlace>
                            <EventsTitle>{data.title}</EventsTitle>
                            {
                                new Date(data.date) > new Date() ?
                                <EventsDescription>{data.description}</EventsDescription> : null
                            }
                            <BtnWrap color={data.color}>
                                <ArrowRight />
                            </BtnWrap>
                        </EventsTextWrapperCol>
                    </EventsCard>
                )}
            )
        }
    </EventsCardWrapper>
  )
}

export default EventList