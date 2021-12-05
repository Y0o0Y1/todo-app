import React, { useState, useEffect } from "react";
import SignIn from "./pages/auth/SignIn";
import { useDispatch } from "react-redux";
import { updateWindowSize } from "./redux/actions/common/dimensions";
import { Grid, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
const App = () => {
	let dispatch = useDispatch();
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
	const handleResize = () => {
		setDimensions({
			height: window.innerHeight,
			width: window.innerWidth,
		});
		updateWindowSize(dispatch, dimensions);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			sx={{
				flexWrap: "wrap",
				height: "100vh",
				width: "100vw",
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<SignIn />} />
					<Route path="/sign-up" exact element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</Grid>
	);
};

export default App;
