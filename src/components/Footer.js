import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
	bottomNavContainer: {
		background: "#222",
	},
	root: {
		"& .MuiSvgIcon-root": {
			fill: "tan",
			"&:hover": {
				fill: "tomato",
				fontSize: "1.8rem",
			},
		},
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<BottomNavigation className={classes.bottomNavContainer}>
			<a href='https://www.facebook.com/ami.ratul.11802/'>
				<BottomNavigationAction icon={<Facebook />} className={classes.root} />
			</a>
			<a href='https://github.com/atif11802'>
				<BottomNavigationAction
					icon={<GitHubIcon />}
					className={classes.root}
				/>
			</a>
			<a href='https://www.linkedin.com/in/atif-aslam-3b7203205'>
				<BottomNavigationAction
					icon={<LinkedInIcon />}
					className={classes.root}
				/>
			</a>
		</BottomNavigation>
	);
};
export default Footer;
