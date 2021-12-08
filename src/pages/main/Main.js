import { useEffect } from "react";
import { AddTaskDialog } from "../../components/AddTaskDialog";
import { Typography, Paper, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTasks } from "../../redux/actions/task/taskAction";
import { useDispatch } from "react-redux";
import Header from "./Header";
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
			<Header />
			<Grid container>
				<Grid item justify="center" xs={12}>
					<Typography variant="h3" align="center">
						Tasks
					</Typography>
				</Grid>
				<Grid
					mt={2}
					item
					container
					alignSelf="center"
					component={Paper}
					elevation={5}
					direction="row"
					justifyContent="center"
					spacing={1}
					sx={{
						margin: "1rem",
					}}
				>
					<Grid item xs={12} align="right" mt={1} mr={1}>
						<AddTaskDialog />
					</Grid>
					{tasks.map((task, index) => {
						return (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								lg={3}
								key={index + 1}
								align={{ sm: "center", xs: "center" }}
							>
								{" "}
								<Note task={task} />
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
};

export default Main;
