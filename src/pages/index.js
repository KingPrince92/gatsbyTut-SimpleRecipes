import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";




export default function Home() {
  return (
		<Layout>
			<main className="page">
				<header className="hero">
					<StaticImage
						src="../assets/images/main.jpeg"
						alt="eggs and flour"
						className="hero-img"
						placeholder="DOMINANT_COLOR"
						layout="fullWidth"
					/>
					<div className="hero-container">
						<div className="hero-text">
							<h1>Simple Recipes</h1>
							<h4>no fluff, just recipes</h4>
						</div>
					</div>
				</header>
				<AllRecipes />
			</main>
		</Layout>
  );
  
}
