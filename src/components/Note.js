import React from "react";
import { Grid, Box, Typography, Paper, Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteTaskDialog from "../components/DeleteTaskDialog";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { updateTaskState } from "../redux/actions/task/taskAction";
const Note = ({ task }) => {
	const userAuthToken = useSelector((state) => {
		return state.userReducer.userAuthToken;
	});
	const dispatch = useDispatch();
	const handleChange = () => {
		updateTaskState(task._id, userAuthToken, dispatch, task.completed);
	};
	return (
		<Box
			elevation={5}
			component={Paper}
			sx={{
				backgroundColor: task.completed ? "#CCFF90" : "#FFD833",
				minWidth: "15vw",
				maxWidth: {
					xs: "100vw",
				},
				border: "2px solid #FFD833",
				borderColor: task.completed ? "#CCFF90" : "#FFD833",
				maxHeight: "max-content",
				borderRadius: "5px",
				margin: "1rem ",
				padding: "0.5rem",
			}}
		>
			<Grid item container direction="column">
				<Grid item container xs={12}>
					<Grid item xs={9} align="left">
						<Typography
							sx={{
								textDecoration: task.completed ? "line-through" : "",
							}}
						>
							{task.description}
						</Typography>
					</Grid>
					<Grid item xs={3} align="right">
						<Checkbox
							checked={task.completed}
							onChange={handleChange}
							checkedIcon={
								<CheckCircleIcon
									fontSize="large"
									sx={{
										color: "gray",
										cursor: "pointer",
									}}
								/>
							}
							icon={
								<CheckCircleOutlineIcon
									sx={{
										color: "gray",
										cursor: "pointer",
									}}
									fontSize="large"
								/>
							}
						/>
					</Grid>
					<Grid
						item
						xs={10}
						align="left"
						sx={{
							alignSelf: "flex-end",
						}}
					>
						<Typography
							sx={{
								fontSize: "0.85rem",
								position: "bottom",
							}}
						>
							Updated at{" "}
							{moment(task.updatedAt).format("dddd, MMM D YYYY, h:mm a")}
						</Typography>
					</Grid>
					<Grid item xs={2} align="right">
						<DeleteTaskDialog taskID={task._id} />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Note;
