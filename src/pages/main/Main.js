import { useEffect } from "react";
import { AddTaskDialog } from "../../components/AddTaskDialog";
import { Typography, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTasks } from "../../redux/actions/task/taskAction";
import { useDispatch } from "react-redux";

import Note from "../../components/Note";

const Main = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => {
		return state.userReducer;
	});
	const tasks = useSelector((state) => {
		return state.tasksReducer.tasks;
	});
	if (!user.loggedIn) {
		navigate("/");
	}
	useEffect(() => {
		getAllTasks(user.userAuthToken, dispatch);
		console.log(tasks);
	}, []);
	return (
		<>
			<Grid item container xs={12} component={Container}>
				<Grid item>
					<Typography variant="h3">Tasks</Typography>
					<AddTaskDialog />
				</Grid>
				{tasks.map((task) => {
					return (
						<Grid item m={1}>
							{" "}
							<Note task={task} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default Main;
