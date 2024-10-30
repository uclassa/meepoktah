import React, { useEffect, useState } from 'react'
import { Button } from '../Commons/ButtonElement'
import Emoji from '../Commons/Emojis'
import {
    EventsContainer,
    EventsHeaderWrapper,
    EventsHeadline,
    EventsSubtitle,
    EventsWrapper,
    Headline,
    EventsCenteredBox,
    InstagramLink
} from './EventElements'
import EventList from './EventList'
import { getEvents } from "../../services/eventsApi"

const EventsSection = () => {

  const [upcomingEvents, setUpcomingEvents] = useState();
  const [pastEvents, setPastEvents] = useState();

  const _handleGetEvents = async () => {
    const res = await getEvents();
    setUpcomingEvents(res.upcoming);
    setPastEvents(res.past);
  }

  useEffect(() => {
    _handleGetEvents();
  }, []);

  return (
    <EventsContainer id="events">
        <EventsHeaderWrapper>
            <EventsHeadline> Our Events </EventsHeadline>
            <EventsSubtitle> Watch this space for updates on future events!</EventsSubtitle>
        </EventsHeaderWrapper>
        {
            upcomingEvents && pastEvents ? <>
                <EventsWrapper>
                    <Headline> <Emoji symbol="🙌" /> Upcoming Events </Headline>
                    {
                    upcomingEvents.length > 0 ? 
                        <EventList events={upcomingEvents} /> : 
                        <EventsCenteredBox>
                            <EventsSubtitle>  
                                No upcoming events for now. Check out our
                                <InstagramLink href={import.meta.env.VITE_INSTAGRAM_LINK} target="_blank">Instagram</InstagramLink>
                                to stay up to date with future events!
                            </EventsSubtitle>
                        </EventsCenteredBox>
                    }
                    <Headline> A couple of our past events</Headline>
                    {
                        pastEvents.length > 0 ? 
                        <EventList events={pastEvents} /> : <></>
                    }
                    <EventsCenteredBox>
                        <EventsSubtitle> Find us on Instagram to keep up to date with all our happenings! <Emoji symbol="👇" /></EventsSubtitle>
                        <Button
                            href={import.meta.env.VITE_INSTAGRAM_LINK}
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