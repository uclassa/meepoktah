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
import {
    getUpcomingEvents,
    getPastEvents
} from "../../services/eventsApi"

const EventsSection = () => {

  const [upcomingEvents, setUpcomingEvents] = useState();
  const _handleGetUpcomingEvents = async () => {
    const res = await getUpcomingEvents()
    setUpcomingEvents(res.data.events)
  }
  const [pastEvents, setPastEvents] = useState();
  const _handleGetPastEvents = async () => {
    const res = await getPastEvents()
    setPastEvents(res.data.events)
  }

  useEffect(() => {
    _handleGetUpcomingEvents();
    _handleGetPastEvents();
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
                                <InstagramLink href='https://www.instagram.com/ucla.ssa/' target="_blank">Instagram</InstagramLink>
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