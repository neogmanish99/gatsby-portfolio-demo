import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({data}) {
    console.log(data);
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    return (
        <Layout>
            <div className={styles.portfolio}>
            <h2>Portfolios</h2>
            <h3>I have created</h3>
            <div className={styles.projects}>
                {
                    projects.map(project=>(
                        <Link to={'/projects/' + project.frontmatter.slug} key={project.id} >
                            <div>
                            <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)}  alt='images'/>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <p>For any business queries! Email me at {contact}</p>
            </div>
        </Layout>
        
    )
}

// export page query

export const query = graphql`
query MyProjects {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
            frontmatter {
            slug
            stack
            title
            thumb {
                childImageSharp {
                gatsbyImageData
                }
            }
            }
            id
        }
        }
        contact: site {
        siteMetadata {
            contact
        }
        }
    }
`