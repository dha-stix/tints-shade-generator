import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Colours from "./components/Colours";

const App = () => {
	return (
		<div style={{ backgroundColor: "#F1F6F9" }}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/colour/:id' element={<Colours />} />
			</Routes>
		</div>
	);
};

export default App;
