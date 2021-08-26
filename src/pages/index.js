import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css'
// import {header} from '../styles/home.module.css'

import { StaticImage } from "gatsby-plugin-image"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({data}) {
  console.log(data);
  // const {title,description} = data.site.siteMetadata;
  return (
      <Layout>
      <section  className={styles.header}>
      <div>
        <h1>Design</h1>
        <h2>Develop & Deploy</h2>
        <p>Welcome to my Portfolio</p>
        <Link className={styles.btn} to="/projects">My Projects</Link>
      </div>
      {/* <img src="/Saly-16.png" alt="site banner" style= {{ maxWidth : '100%'}} /> */}
      {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} /> */}
      <StaticImage src='../images/Saly-16.png' alt='sally'/>
      {/* <GatsbyImage image={getImage(data.file)} alt='bhoom'/> */}
      </section>
      </Layout>
  )
}

// export const query = graphql`
// query MyQuery {
//     site {
//       siteMetadata {
//         copyright
//         description
//         title
//       }
//     }
//   }
// `

// export const query = graphql`
// query Sally {
//   file(name: {eq: "Saly-16"}) {
//     childImageSharp {
//       gatsbyImageData(placeholder: DOMINANT_COLOR)
//     }
//   }
// }
// `