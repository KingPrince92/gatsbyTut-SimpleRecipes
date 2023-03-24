/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
	siteMetadata: {
		title: "Simply Recipes",
		description: "Nice and clean recipes site",
		author: "@johndoe",
		person: {
			name: "john",
			age: 30,
		},
		simpleData: ["item 1", "item 2"],
		complexData: [
			{
				name: "john",
				age: 30,
			},
			{
				name: "susan",
				age: 32,
			},
		],
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `yyd8cwd1t89u`,
				accessToken: process.env.CONTENTFUL_API_KEY,
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Montserrat", "Inconsolata"],
				},
			},
		},
	],
};
