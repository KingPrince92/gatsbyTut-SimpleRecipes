import React from 'react'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import  Layout from '../components/Layout'

const TagTemplate = ({data, pageContext}) => {
	
	const recipes = data.allContentfulRecipe.nodes
	
  return (
		<Layout>
			<main className="page">
				<h2>{pageContext.tag}</h2>
				<div className="tag-recipes">
					<RecipesList recipes={recipes}/>
				</div>
			</main>
		</Layout>
  );
}


export const query = graphql`
	query getRecipeByTag($tag: String) {
		allContentfulRecipe(
			filter: { content: { tags: { eq: $tag } } }
			sort: { title: ASC }
		) {
			nodes {
				prepTime
				cookTime
				id
				title
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
				}
			}
		}
	}
`;

export default TagTemplate
