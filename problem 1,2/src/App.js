import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem1";
import Problem2 from "./components/Problem2";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Problem1 />} exact />
					<Route path="/problem2" element={<Problem2 />} exact />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
