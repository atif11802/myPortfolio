import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
	contactContainer: {
		background: "#233",
		height: "100vh",
	},
	heading: {
		color: "tomato",
		textAlign: "center",
		textTransform: "uppercase",
		marginBottom: "1rem",
	},
	form: {
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		position: "absolute",
	},
	input: {
		color: "#fff",
	},
	button: {
		marginTop: "1rem",
		color: "tomato",
		borderColor: "tan",
	},
	field: {
		margin: "1rem 0rem",
	},
}));

const InputField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "tomato",
		},
		"& label": {
			color: "tan",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "tan",
			},
			"&:hover fieldset": {
				borderColor: "tan",
			},
			"&.Mui-focused fieldset": {
				color: "#fff",
				borderColor: "tan",
			},
		},
	},
})(TextField);

const Contact = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);

	const classes = useStyles();

	const templateParams = {
		name: name,
		message: message,
		email: email,
	};

	const handleSubmit = async () => {
		emailjs
			.send(
				"service_9pucq3u",
				"template_qo1eas8",
				templateParams,
				"user_Q32EKyohJGIY0Qtgc0Psa"
			)
			.then(
				(response) => {
					const notify = () =>
						toast.success("I received your message", {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					notify();
					setSuccess(true);
				},
				(err) => {
					// console.log("FAILED...", err);
					const notify = () =>
						toast.error("😢 try again later", {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					notify();
					setSuccess(false);
				}
			);
	};

	return (
		<Box component='div' className={classes.contactContainer}>
			<Grid container justify='center'>
				<Box component='form' className={classes.form}>
					<Typography variant='h5' className={classes.heading}>
						Hire or Contact me...
					</Typography>
					<InputField
						fullWidth={true}
						label='Name'
						variant='outlined'
						inputProps={{ className: classes.input }}
						onChange={(e) => setName(e.target.value)}
					/>
					<InputField
						fullWidth={true}
						label='Email'
						variant='outlined'
						inputProps={{ className: classes.input }}
						className={classes.field}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<InputField
						fullWidth={true}
						label='Message'
						variant='outlined'
						multiline
						rows={4}
						inputProps={{ className: classes.input }}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<Button
						variant='outlined'
						fullWidth={true}
						endIcon={<Send />}
						className={classes.button}
						onClick={handleSubmit}
					>
						Contact Me
					</Button>
				</Box>
			</Grid>
			{success ? (
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			) : (
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			)}
		</Box>
	);
};

export default Contact;
