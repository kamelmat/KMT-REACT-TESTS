import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TemporizadorDeSegundos from "./TemporizadorDeSegundos"
import { faPlay, faPause, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const [timerSeconds, setCount] = useState(0);
	const [estaPausa, setEstaPausa] = useState(false);
	const [estaAlertado, setEstaAlertado] = useState(false);
	const [alertaEnEntrada, setAlertaEnEntrada] = useState("100");

	useEffect(() => {
		const interval = setInterval(() => {
			if (!estaPausa) {
				setCount(timerSeconds => timerSeconds + 1);
			}
		}, 1000);
		
		const alertaEnNumero = Number(alertaEnEntrada);
		if (timerSeconds >= alertaEnNumero && !estaAlertado) {
			setEstaAlertado(true);
		} else if (timerSeconds < alertaEnNumero && estaAlertado) {
			setEstaAlertado(false)
		}

		return () => clearInterval(interval);
	}, [estaPausa, timerSeconds, alertaEnEntrada, estaAlertado]);

	const manejarCambioEntrada = (event) => {
		setAlertaEnEntrada(event.target.value);
	};

	const alternarPausa = () => {
		setEstaPausa(!estaPausa);
	};

	const temporizadorDeReinicio = () => {
		setCount(0);
		setEstaAlertado(false);
	};

	return (
		<div className="container d-flex flex-column align-items-center py-4">
			{estaAlertado && 
				<div className="alert alert-danger" role="alert">
					{'Alerta!! El temporizador ha alcanzado ' + alertaEnEntrada + ' segundos.'}
				</div>
			}
			<TemporizadorDeSegundos segundos={timerSeconds} />
			
			<div className="row justify-content-center my-3">
				<div className="col-auto">
					<button type="button" className="btn btn-secondary mx-2" onClick={alternarPausa}>
						{!estaPausa ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
					</button>
					<button type="button" className="btn btn-secondary mx-2" onClick={temporizadorDeReinicio}>
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
							onChange={manejarCambioEntrada}
							value={alertaEnEntrada}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;