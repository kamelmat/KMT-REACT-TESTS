import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Simplecounter } from "./Simplecounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Simplecounter />     
		</div>
	);
};

export default Home;