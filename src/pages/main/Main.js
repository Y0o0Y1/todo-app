import { useEffect } from "react";
import { AddTaskDialog } from "../../components/AddTaskDialog";
import {
	Typography,
	Paper,
	Grid,
	Backdrop,
	CircularProgress,
} from "@mui/material";
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
	const tasksState = useSelector((state) => {
		return state.tasksReducer;
	});
	if (!user.loggedIn) {
		navigate("/");
	}
	useEffect(() => {
		getAllTasks(user.userAuthToken, dispatch);
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
					{tasksState.gettingTasks ? (
						<Backdrop
							sx={{
								color: "black",
								zIndex: (theme) => theme.zIndex.drawer + 1,
							}}
							open={tasksState.gettingTasks}
						>
							<CircularProgress color="inherit" />
						</Backdrop>
					) : null}
					<>
						{tasksState.tasks.map((task, index) => {
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
					</>
				</Grid>
			</Grid>
		</>
	);
};

export default Main;
