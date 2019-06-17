import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql,  } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import LatestEpisodePlayer from '../components/LatestEpisodePlayer';

const logo = require("../img/castnburnlogo.svg");
// import GatsbyImageSharpFluid from "gatsby-image";
// const backgroundLogo : GatsbyImageSharpFluid  = require("../img/castnburnlogo.svg");



export interface IndexPageProps {
image: {childImageSharp: any} | any;
allAnchorEpisode?: any
}

export const IndexPageTemplate = ({
  allAnchorEpisode
}:IndexPageProps) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      // style={{
      //   backgroundImage: `url(${
      //     !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      //   })`,
      //   backgroundPosition: `top left`,
      //   backgroundAttachment: `fixed`,
      // }}
    >
      <img src={logo} className="full-width-image"/>
      {/* <PreviewCompatibleBackgroundImage
        imageInfo={{
          image: "../img/castnburnlogo.svg",
          alt: "Background image for Cast and Burn Gaming",
        }}
      />      */}
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                      Latest podcast episode
                  </h3>
                  <LatestEpisodePlayer data={allAnchorEpisode}/>
                  <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/episodes">
                        See all
                      </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)



const IndexPage = ({ data }: any) => {
  const { frontmatter } = data.markdownRemark
  //const {allAnchorEpisode} = data;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        allAnchorEpisode={data}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
// export function convertImageToFluid(image : any) {
//   const newImage : GatsbyImageSharpFluid = {
//       fluid: {

//       }

//     }
//   }
// }
export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 972, maxHeight: 648, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }                
        
      }
    }
    allAnchorEpisode(limit: 1) {
            edges{
                node{
                    id
                    title
                    isoDate(formatString: "MMMM DD, YYYY")
                    enclosure {
                        url
                        type
                    }
                }
            }
        }
  }
`
