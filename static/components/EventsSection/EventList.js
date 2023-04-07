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
                return(
                <EventsCard key={index}>
                    <EventsPhoto src={data.image} alt="Picture of event"/>
                    <EventsTextWrapperCol href={data.link} target="_blank">
                        <EventsDatePlace>{new Date(data.date).toDateString()} | {data.address}</EventsDatePlace>
                        <EventsTitle>{data.title}</EventsTitle>
                        <EventsDescription>{data.description}</EventsDescription>
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