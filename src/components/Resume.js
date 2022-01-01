import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "o auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid tan",
			right: "40px",
			top: 0,
		},
		"&:after": {
			content: "''",
			display: "table",
			clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	timeLineItem: {
		padding: "1rem",
		borderBottom: "2px solid tan",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.625rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "tomato tomato transparent transparent",
			borderWidth: "0.625rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent tomato tomato",
			},
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		color: "#fff",
		background: "tomato",
		lineHeight: 1,
		padding: "0.5rem 1rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	heading: {
		color: "tomato",
		padding: "3rem 0",
		textTransform: "uppercase",
	},
	subHeading: {
		color: "#fff",
		padding: 0,
		textTransform: "uppercase",
	},
	body1: {
		color: "tomato",
	},
	subtitle1: {
		color: "tan",
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Box component='header' className={classes.mainContainer}>
			<Typography variant='h4' align='center' className={classes.heading}>
				My life
			</Typography>
			<Box component='div' className={classes.timeLine}>
				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2001
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						Bio
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						I was born in the small village of cumilla,Bangladesh.
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						My father name is Md. Amir Hossain.he was an army personnel. my
						mother name is Mrs. Shahida Akter.she is a housewife. I Have two
						brothers.Muhaiminul(elder) and Nabil(younger).
					</Typography>
				</Box>
				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2008-2011
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						Abroad
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						I was in kuwait for three years.
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						There i studied in a Indian school.so i met many people from
						different part of the world and i learnt good communication skills
						in different Languages.
					</Typography>
				</Box>
				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2016-2018
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						SSC & HSC
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						My Shool And College Life
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						I completed my SSC(2016) from Adamjee Cantonment Public School and
						completed my HSC(2018) from Adamjee Cantonment College.
					</Typography>
				</Box>
				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2020-present
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						University
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						Dhaka International University
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						I am currently pursuing my B.Sc in Computer Science and Engineering
						from Dhaka International University.I am in 6th semester. i am also
						learning web developing by myslef.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Resume;
