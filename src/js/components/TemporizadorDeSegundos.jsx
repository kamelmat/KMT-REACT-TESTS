import React from "react";
import PropTypes from "prop-types";
import TarjetaTemporizadora from "./TarjetaTemporizadora";

function ObtenerSegundosCadena(seconds) {
    let text = seconds.toString();
    if (text.length > 6) {
        return text
    }
    return "0".repeat(6-text.length) + text

}


const TemporizadorDeSegundos = (props) => {
    const segundos = ObtenerSegundosCadena(props.segundos)
    console.log("seconds: " + segundos)
    return (
        <>
            <div className="container-fluid justify-content-center mx-auto d-flex flex-row align-items-center text-center timer-container">
                <div className="tcard" key="icon">
                    <TarjetaTemporizadora isIcon={true} />
                </div>
                {segundos.split("").map((num, i) => (
                    <div className="tcard" key={i + 1}>
                        <TarjetaTemporizadora isIcon={false} numero={Number(num)} />
                    </div>
                ))}
            </div>
        </>
    );
};

TemporizadorDeSegundos.propTypes = {
    segundos: PropTypes.number
};

export default TemporizadorDeSegundos;