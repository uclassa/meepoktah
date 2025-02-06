import { useEffect, useState } from 'react'
import Emoji from '../Commons/Emojis'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import heroVideo from '/videos/hero.mp4'
import Button from '../Commons/Button'
import './Hero.scss';


export default function Hero() {
    const [video, setVideo]: [undefined|string, Function] = useState();
    useEffect(() => {
        setVideo(heroVideo);
    }, [])

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div className='hero-container'>
            <div className='hero-bg'>
                <video className='video-bg'
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    src={video}
                />
            </div>
            <div className='hero-content'>
                <h1> SINGAPORE STUDENTS' ASSOCIATION </h1>
                <p> <Emoji symbol="👋" /> Hello! Welcome to SSA, a tight-knit community that welcomes everyone! </p>
                <div className='mt-4.5'>
                    <Button onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={true}>
                        <a href={import.meta.env.VITE_DISCORD_LINK}
                            target='_blank' />
                        Join Us! {hover ? <MdArrowForward className='ml-2 text-xl' /> : <MdKeyboardArrowRight className='ml-2 text-xl' />}
                    </Button>
                </div>
            </div>
        </div>
    )
}