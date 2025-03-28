import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const Simplecounter = () => {
    const [seconds, setseconds] = useState(0);
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setseconds(prevSeconds => prevSeconds + 1)
            
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    useEffect(()=> {
        if (seconds === 59) {
            setMinutes(pervMinutes => pervMinutes + 1)
            setseconds(0)
        }
    }, [seconds])

    return (
        <>
            <div className="container">
                <div className="row justify-content-center padre">
                    <div className="clock d-flex gap-2 col-auto">
                        <FontAwesomeIcon className="clock" icon={faClock} />
                    </div>
                    <div className="segundos d-flex gap-2 col-auto">
                        <p>{minutes >= 10? "": 0 }</p>
                        <p>{minutes}</p>
                    </div>
                    <div className="minutos d-flex gap-2  col-auto">
                        <p>{seconds >= 10 ? "" : 0}</p>
                        <p>{seconds}</p>
                    </div>
                </div>
            </div>
        </>
    )
}