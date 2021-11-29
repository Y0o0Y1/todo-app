import React, { useState, useEffect } from "react";
import SignIn from "./pages/auth/SignIn";
import { useDispatch } from "react-redux";

import { updateWindowSize } from "./redux/actions/common/dimensions";

const appStyle = {
	display: "grid",
	justifyContent: "center",
	height: "1024px",
};
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
		<div style={appStyle}>
			<SignIn />
		</div>
	);
};

export default App;
