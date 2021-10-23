import React,{useState, useRef, useEffect} from 'react'

const MutableRef = () => {
    const [time, setTime] = useState(0);
    const valueRef = useRef<number | null>(null);

    const stopTimer = () => {
     if(valueRef.current)   window.clearInterval(valueRef.current);
    }
    useEffect(() => {
        valueRef.current = window.setInterval(() => {
            setTime((timer) => timer + 1)
        },1000)
        return () => {
             stopTimer();
        }
    }, [ ])
    return (
        <div>
            HOOk timer = {time}
            <button onClick={() => stopTimer()}>Stop timer</button>
        </div>
    )
}

export default MutableRef
