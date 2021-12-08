import React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	IconButton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/task/taskAction";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteTaskDialog = ({ taskID }) => {
	const dispatch = useDispatch();
	const userAuthToken = useSelector((state) => {
		return state.userReducer.userAuthToken;
	});
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = () => {
		deleteTask(taskID, userAuthToken, dispatch);
		handleClose();
	};
	return (
		<>
			<IconButton onClick={handleClickOpen}>
				<DeleteIcon fontSize="small" />
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent id="alert-dialog-title">
					Are You sure that you want to delete this task?
				</DialogContent>
				<DialogActions>
					<Button
						variant="filled"
						onClick={handleClose}
						sx={{
							color: "red",
						}}
					>
						Cancel
					</Button>
					<Button
						onClick={handleDelete}
						sx={{
							color: "green",
						}}
					>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DeleteTaskDialog;
