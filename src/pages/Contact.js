import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const Contact = ({data: {allContentfulRecipe: {nodes: recipes}}}) => {
  return (
		<Layout>
			<main className="page">
				<section className="contact-page">
					<article className="contact-info">
						<h3>Want To Get In Touch?</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Debitis dolor reprehenderit voluptates ipsam
							quaerat aliquid repellendus quod ea modi, ex eum?
							Sed, porro? Odio illo beatae ad? Mollitia,
							perferendis error.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nulla, nesciunt! Delectus, ab sapiente!
							Veritatis id aliquid distinctio quia error ipsam in
							modi perspiciatis iusto provident recusandae nulla
							autem quisquam qui aliquam voluptatibus tempore
							corporis, quidem obcaecati accusamus quasi fugiat
							cum.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Illum odit, totam blanditiis vel iure maiores
							sed architecto eos rerum earum.
						</p>
					</article>
					<article>
						<form className="form contact-form">
							<div className="form-row">
								<label htmlFor="name">Your Name</label>
								<input type="text" name="name" id="name" />
							</div>
							<div className="form-row">
								<label htmlFor="email">Your Email</label>
								<input type="text" name="email" id="email" />
							</div>
							<div className="form-row">
								<label htmlFor="message">Message</label>
								<textarea name="message" id="message"></textarea>
							</div>
							<button type='submit' className="btn block">Submit</button>
						</form>
					</article>
				</section>
				<section className='featured-recipes'>
					<h5>Featured Recipes</h5>
					<RecipesList recipes={recipes}/>
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
export default Contact;