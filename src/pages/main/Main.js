import React from "react";

import { Button, Container, Grid } from "@mui/material";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Main = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => {
		return state.userReducer;
	});
	if (!user.loggedIn) {
		navigate("/");
	}
	console.log(user);
	return (
		<Grid item xs={12} component={Container}>
			{/* <Header /> */}
			<h1>Notes</h1>
		</Grid>
	);
};

export default Main;
