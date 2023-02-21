import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import project1 from "../images/Mern Ecommerce.png";
import project2 from "../images/weather.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import project7 from "../images/project7.png";
import projectrq from "../images/project2.png";
import Fbclone from "../images/Facebookclone.jpg";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
		height: "100%",
	},
	cardContainer: {
		maxWidth: 345,
		margin: "3rem auto",
	},
}));

const projects = [
	{
		name: "Ecommerce Website(MERN STACK)",
		description:
			"This is a fun project made by me. It is a ecommerce website made with React, Redux   and bootstrap.complete buy sell and with user profile and admin dashboard for admin.Used Paypal for payment  payment.and used localStorage for the cart.mongodb used here as the Database",
		image: project1,
		link: "https://nextjs-ecommerce-xi-eight.vercel.app/",
	},
	{
		name: "Facebook Clone (MERN STACK)",
		description:
			"Facebook clone made with React,node and mongodb as the database.Used firebase for the authentication and hosting",
		image: Fbclone,
		link: "https://facebook-clone-client-ten.vercel.app/",
	},
	{
		name: "Infinite scroll with React(with react query and without)",
		description:
			"In this mini project Infinite Scroll has been developed.so you can use react infinite scroll with React(with react query and without)",
		image: projectrq,
		link: "https://hopeful-borg-7382fb.netlify.app/",
	},
	{
		name: "Weather App",
		description:
			"This is a weather app Where you can find your city's weather information.It is made with React .It uses the openweathermap api to get the weather information",
		image: project2,
		link: "https://keen-hopper-b2da78.netlify.app/",
	},
	{
		name: "Instagram Clone(FULL STACK FIREBASE)",
		description:
			"This is a Instagram clone made with React.It is a fullstack project.It is made with React.It uses the firebase as the database.you can chat and receive message you can also post.",
		image: project3,
		link: "https://atif11802.github.io/social-clone/",
	},
	{
		name: "Amazon Clone(focused on CART)",
		description:
			"This is a Amazon clone made with React.It is a basically a ecommerce website.It is made with React.here add to cart implemented properly",
		image: project4,
		link: "https://clone-2aa0c.firebaseapp.com/",
	},
	{
		name: "LinkedIn clone(focused on Ui)",
		description:
			"This is a LinkedIn clone made with React.It is a fullstack project.It is made with React.It uses the firebase as the database.You can post and see other peoples posts",
		image: project5,
		link: "https://linked-in-clone-93b2b.firebaseapp.com/",
	},
	{
		name: "Netflix clone(focused on Ui/little functionality)",
		description:
			"THis is netflix clone here you can press any movie and watch the trailer from the youtube",
		image: project6,
		link: "https://atif11802.github.io/Netflix-clone-react/",
	},
	{
		name: "Airbnb Clone (focused on Ui)",
		description:
			"this is only ui made by React.only one functionality of navbar while Scrolling",
		image: project7,
		link: "https://atif11802.github.io/airbnb/",
	},
];

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component='div' className={classes.mainContainer}>
			<Grid container justify='center'>
				{/* Projects */}
				{projects.map((project, i) => (
					<Grid item xs={12} sm={8} md={4} key={i}>
						<Card
							className={classes.cardContainer}
							style={{ minHeight: "420px" }}
						>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='Project 1'
									height='140'
									image={project.image}
								/>
								<CardContent>
									<Typography variant='h5' gutterBottom>
										{project.name}
									</Typography>
									<Typography variant='body2' color='textSecondary'>
										{project.description}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<a className='anchor' href={project.link}>
									project Link
								</a>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Portfolio;
