import React, { useEffect, useState } from 'react'
import { Button } from './../Commons/ButtonElement'
import Emoji from './../Commons/Emojis'
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
    EventsCenteredBox
} from './EventElements'

const EventsSection = () => {

  const [upcomingEvents, setUpcomingEvents] = useState();
  const getUpcomingEvents = () => {
    axios.get(`/api/UpcomingEvents`).then(
        (response) => {
            const upcomingEvents = response.data;
            setUpcomingEvents(upcomingEvents);
            console.log(response.data);
        }
        ).catch(() => {
            console.log("Error fetching list of upcoming events");
        });
    }
  const [pastEvents, setPastEvents] = useState();
  const getPastEvents = () => {
    axios.get(`/api/PastEvents`).then(
        (response) => {
            const pastEvents = response.data;
            setPastEvents(pastEvents);
            console.log(response.data);
        }
        ).catch(() => {
            console.log("Error fetching list of past events");
        });
    }
  useEffect(() => {
    getUpcomingEvents();
    getPastEvents();
  }, []);

  return (
    <EventsContainer>
        <EventsHeaderWrapper id="events">
            <EventsHeadline> <Emoji symbol="🔥" /> Our Events <Emoji symbol="🔥" /> </EventsHeadline>
            <EventsSubtitle> The SSA community comes together multiple times each quarter. Stay up to date by following us on Instagram! </EventsSubtitle>
            <Button
                href="https://www.instagram.com/ucla.ssa/"
                target="_blank"
                fontBig = '1'
            > Stalk Us! </Button>
        </EventsHeaderWrapper>
        {
            upcomingEvents && pastEvents ? <>
                <EventsWrapper>
                    <Headline> <Emoji symbol="🙌" /> Upcoming Events </Headline>
                    {
                        upcomingEvents.length > 0 ? 
                        <EventsCardWrapper>{
                        upcomingEvents.map((data, index) => {
                            return(
                            <EventsCard>
                                <EventsPhoto src={data.image} alt="Picture of event"/>
                                <EventsTextWrapperCol>
                                    <EventsDatePlace>{data.date} | {data.address}</EventsDatePlace>
                                    <EventsTitle>{data.title}</EventsTitle>
                                    <EventsDescription>{data.description}</EventsDescription>
                                    <BtnWrap href={data.link} target="_blank" color={data.color}>
                                        <ArrowRight />
                                    </BtnWrap>
                                </EventsTextWrapperCol>
                            </EventsCard>
                            )}
                        )
                        }
                    </EventsCardWrapper> : 
                    <EventsCenteredBox>
                        <EventsSubtitle>  <Emoji symbol="😢"/> No upcoming events for now, follow us on Instagram to stay up to date with future events!</EventsSubtitle>
                    </EventsCenteredBox>
                    }
                    <Headline> A couple of our past events</Headline>
                    <EventsCardWrapper>
                    {
                        pastEvents.length > 0 ? 
                        pastEvents.map((data, index) => {
                            return(
                            <EventsCard>
                                <EventsPhoto src={data.image} alt="Picture of event"/>
                                <EventsTextWrapperCol>
                                    <EventsDatePlace>{data.date} | {data.address}</EventsDatePlace>
                                    <EventsTitle>{data.title}</EventsTitle>
                                    <EventsDescription>{data.description}</EventsDescription>
                                    <BtnWrap href={data.link} target="_blank" color={data.color}>
                                        <ArrowRight />
                                    </BtnWrap>
                                </EventsTextWrapperCol>
                            </EventsCard>
                            )}
                        ) : <></>
                    }
                    </EventsCardWrapper>
                    <EventsCenteredBox>
                        <EventsSubtitle> Find us on instagram for more of our past events! <Emoji symbol="👇" /></EventsSubtitle>
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