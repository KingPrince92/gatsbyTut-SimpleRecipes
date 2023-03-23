import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image';
import { Link , graphql} from 'gatsby';
import RecipesList from '../components/RecipesList';


const About = ({data: {allContentfulRecipe: {nodes:recipes}}}) => {
	
  return (
		<Layout>
	<main className="page">
		<section className="about-page">
			<article>
				<h2>About Us</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod natus labore reiciendis, unde modi tenetur, consectetur veritatis aut est ducimus sint amet, quisquam hic eos quasi quis ratione illo eaque!</p>
				
				<Link to="/Contact" className="btn">Contact </Link>
			</article>
			<StaticImage src="../assets/images/about.jpeg" alt="person pouring salt in bowl" className="about-img" placeholder="blurred" />
		</section>
		<section className="featured-recipes">
			<h5>Look at these!</h5>
			<RecipesList  recipes={recipes}/>
		</section>
	</main>
		</Layout>
  );
}

export const query = graphql`
	query {
		allContentfulRecipe(
			sort: { title: ASC }
			filter: { featured: { eq: true } }
		) {
			nodes {
				id
				title
				cookTime
				prepTime
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
				}
			}
		}
	}
`;

export default About
