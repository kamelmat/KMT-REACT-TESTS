import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TemporizadorDeSegundos from "./TemporizadorDeSegundos";
import { faPlay, faPause, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerSeconds: 0,
            estaPausa: false,
            estaAlertado: false,
            alertaEnEntrada: "100"
        };
        this.interval = setInterval(this.incrementarTemporizador, 1000);
    }

    incrementarTemporizador = () => {
        if (!this.state.estaPausa) {
            this.setState(prevState => {
                const nuevoTiempo = prevState.timerSeconds + 1;
                const alertaEnNumero = Number(prevState.alertaEnEntrada);
                return {
                    timerSeconds: nuevoTiempo,
                    estaAlertado: nuevoTiempo >= alertaEnNumero
                };
            });
        }
    };

    manejarCambioEntrada = (event) => {
        const nuevoValor = event.target.value;
        this.setState(prevState => ({
            alertaEnEntrada: nuevoValor,
            estaAlertado: prevState.timerSeconds >= Number(nuevoValor)
        }));
    };

    alternarPausa = () => {
        this.setState(prevState => ({ estaPausa: !prevState.estaPausa }));
    };

    temporizadorDeReinicio = () => {
        this.setState({ timerSeconds: 0, estaAlertado: false });
    };

    render() {
        return (
            <div className="container d-flex flex-column align-items-center py-4">
                {this.state.estaAlertado && 
                    <div className="alert alert-danger" role="alert">
                        {'Alerta!! El temporizador ha alcanzado ' + this.state.alertaEnEntrada + ' segundos.'}
                    </div>
                }
                <TemporizadorDeSegundos segundos={this.state.timerSeconds} />
                
                <div className="row justify-content-center my-3">
                    <div className="col-auto">
                        <button type="button" className="btn btn-secondary mx-2" onClick={this.alternarPausa}>
                            {!this.state.estaPausa ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                        </button>
                        <button type="button" className="btn btn-secondary mx-2" onClick={this.temporizadorDeReinicio}>
                            <FontAwesomeIcon icon={faArrowsRotate} />
                        </button>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Alerta en</span>
                            </div>
                            <input
                                type="text"
                                className="form-control text-center"
                                aria-label="alerta en (segundos)"
                                onChange={this.manejarCambioEntrada}
                                value={this.state.alertaEnEntrada}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
