import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

import logo from "../../assets/images/google-keep.png";

import { logout } from "../../redux/actions/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => {
		return state.userReducer;
	});
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<Grid
			item
			sx={{
				width: "100vw",
			}}
		>
			{" "}
			<AppBar
				position="static"
				sx={{
					margin: "0",
					backgroundColor: "#FFD833",
					width: "100%",
				}}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
						>
							<img width="50" height="50" src={logo} alt="logo" />
						</Box>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						>
							<Box
								variant="h6"
								noWrap
								mb={1}
								mt={1}
								component="div"
								sx={{
									flexGrow: 1,
									display: { xs: "flex", md: "none" },
								}}
							>
								<img width="50" height="50" src={logo} alt="logo" />
							</Box>{" "}
						</Typography>
						<Box
							sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
						></Box>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar
										alt={user.user.name}
										src="/static/images/avatar/2.jpg"
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{" "}
								<MenuItem key="" onClick={handleCloseNavMenu}>
									<Button
										onClick={() => {
											logout(dispatch, user.userAuthToken, navigate);
										}}
									>
										Logout
									</Button>
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Grid>
	);
};
export default Header;
