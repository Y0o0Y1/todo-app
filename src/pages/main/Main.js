import { AddTodoDialog } from "../../components/AddTodoDialog";
import { Typography, Container, Grid } from "@mui/material";
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
			<Typography variant="h3">Notes</Typography>
			<AddTodoDialog />
		</Grid>
	);
};

export default Main;
