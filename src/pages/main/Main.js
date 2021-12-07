import { useCallback, useState } from "react";
import { AddTodoDialog } from "../../components/AddTodoDialog";
import { Button, Container, Grid } from "@mui/material";
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
	return (
		<Grid item xs={12} component={Container}>
			<h1>Notes</h1>
			<AddTodoDialog />
		</Grid>
	);
};

export default Main;
