import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
	query  {
		site {
			info: siteMetadata {
				author
				description
				simpleData
				title
				complexData {
					age
					name
				}
				person {
					age
					name
				}
			}
		}
	}
`;

const FetchData = () => {
	const data = useStaticQuery(getData);
	const content = data.site.info;
  return (
	<div>
	{/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
	<h2>Site title is: {content.title}</h2>
	</div>
  )
}

export default FetchData
