import './Events.css';

interface EventProps {
    event: JSX.Element;
}

export default function Events ({ event }: EventProps) { 
    return (
    <div className='randomEvent'>
        {event}
    </div>
    )
}