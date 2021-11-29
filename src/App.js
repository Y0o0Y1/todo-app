import React, { useState, useEffect } from "react";
import SignIn from "./pages/auth/SignIn";
import { useDispatch } from "react-redux";
import { updateWindowSize } from "./redux/actions/common/dimensions";
import { Grid } from "@mui/material";

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
	const appStyle = {
		padding: `0px`,
		margin: `${dimensions.height / 8}px ${dimensions.width / 5}px`,
	};
	return (
		<Grid container justifyContent="center" mt={dimensions.height / 8/8}>
			<Grid item xs={12}>
				<SignIn />
			</Grid>
		</Grid>
	);
};

export default App;
