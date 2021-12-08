import React, { useState } from "react";
import { Grid, Box, Typography, Paper, Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import DeleteTaskDialog from "../components/DeleteTaskDialog";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskState } from "../redux/actions/task/taskAction";
const Note = ({ task }) => {
	const userAuthToken = useSelector((state) => {
		return state.userReducer.userAuthToken;
	});
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(task.completed);
	const handleChange = () => {
		setChecked((prev) => !prev);
		updateTaskState(task._id, userAuthToken, dispatch, task.completed);
	};
	return (
		<Box
			elevation={5}
			component={Paper}
			sx={{
				backgroundColor: "#FFD833",
				maxWidth: "20vw",
				border: "2px solid #FFD833",
				maxHeight: "max-content",
				borderRadius: "5px",
				margin: "1rem ",
				padding: "0.3rem",
			}}
		>
			<Grid item container direction="row" wrap>
				<Grid item xs={10} align="left">
					<Typography
						sx={{
							textDecoration: checked ? "line-through" : "",
						}}
					>
						{task.description}
					</Typography>
				</Grid>
				<Grid item xs={1}>
					<Checkbox
						checked={checked}
						onChange={handleChange}
						checkedIcon={
							<CheckCircleIcon
								fontSize="small"
								sx={{
									color: "#cca500",
									cursor: "pointer",
								}}
							/>
						}
						icon={
							<CheckCircleOutlineIcon
								sx={{
									color: "#cca500",
									cursor: "pointer",
								}}
								fontSize="small"
							/>
						}
					/>
				</Grid>
				<Grid item xs={12} align="right" justify="center">
					<DeleteTaskDialog taskID={task._id} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Note;
