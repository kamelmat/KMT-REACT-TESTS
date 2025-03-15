import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const TarjetaTemporizadora = (props) => {
    return (
        <div className="TarjetaTemporizadora">
            {props.isIcon && <FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} />}
            {
                !props.isIcon && props.numero
            }
        </div>
    );
};

TarjetaTemporizadora.propTypes = {
    isIcon: PropTypes.bool,
    numero: PropTypes.number
};

export default TarjetaTemporizadora;