import React, { useEffect, useState } from 'react'
import { Button } from '../Commons/ButtonElement'
import Emoji from '../Commons/Emojis'
import axios from 'axios';
import {
    EventsContainer,
    EventsHeaderWrapper,
    EventsHeadline,
    EventsSubtitle,
    EventsWrapper,
    Headline,
    EventsCardWrapper,
    EventsCard,
    EventsPhoto,
    EventsTextWrapperCol,
    EventsDatePlace,
    EventsTitle,
    EventsDescription,
    BtnWrap,
    ArrowRight,
    EventsCenteredBox,
    InstagramLink
} from './EventElements'

import {
    getUpcomingEvents,
    getPastEvents
} from "../../services/eventsApi"

const EventsSection = () => {

  const [upcomingEvents, setUpcomingEvents] = useState();

  const _handleGetUpcomingEvents = async () => {
    const res = await getUpcomingEvents()
    console.log(res)
    setUpcomingEvents(res.data.events)
  }
  const [pastEvents, setPastEvents] = useState();
  const _handleGetPastEvents = async () => {
    const res = await getPastEvents()
    console.log(res)
    setPastEvents(res.data.events)
  }

  useEffect(() => {
    _handleGetUpcomingEvents();
    _handleGetPastEvents();
  }, []);

  return (
    <EventsContainer>
        <EventsHeaderWrapper id="events">
            <EventsHeadline> <Emoji symbol="🔥" /> Our Events <Emoji symbol="🔥" /> </EventsHeadline>
            <EventsSubtitle> We come together regularly to bond, eat, travel, and more. Watch this space for updates on future events!</EventsSubtitle>
        </EventsHeaderWrapper>
        {
            upcomingEvents && pastEvents ? <>
                <EventsWrapper>
                    <Headline> <Emoji symbol="🙌" /> Upcoming Events </Headline>
                    {
                        upcomingEvents.length > 0 ? 
                        <EventsCardWrapper>
                            {
                                upcomingEvents.map((data, index) => {
                                    return(
                                    <EventsCard key={index}>
                                        <EventsPhoto src={data.image} alt="Picture of event"/>
                                        <EventsTextWrapperCol href={data.link} target="_blank" >
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
                        </EventsCardWrapper> : 
                    <EventsCenteredBox>
                        <EventsSubtitle>  
                            No upcoming events for now. Check out our
                            <InstagramLink href='https://www.instagram.com/ucla.ssa/' target="_blank">Instagram</InstagramLink>
                            to stay up to date with future events!
                        </EventsSubtitle>
                    </EventsCenteredBox>
                    }
                    <Headline> A couple of our past events</Headline>
                    <EventsCardWrapper>
                    {
                        pastEvents.length > 0 ? 
                        pastEvents.map((data, index) => {
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
                        ) : <></>
                    }
                    </EventsCardWrapper>
                    <EventsCenteredBox>
                        <EventsSubtitle> Find us on Instagram to keep up to date with all our happenings! <Emoji symbol="👇" /></EventsSubtitle>
                        <Button
                            href="https://www.instagram.com/ucla.ssa/"
                            target="_blank"
                            fontBig = '1'
                        > Stalk Us! </Button>
                    </EventsCenteredBox>
                </EventsWrapper>
            </> : <></>
        }
    </EventsContainer>
  )
}

export default EventsSection