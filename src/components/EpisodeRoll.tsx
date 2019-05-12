import {Link, graphql} from "gatsby";
import React from "react";

const EpisodeRoll = ({data} : any) => {
    return (
        <div className="columns is-multiline">
          {data.allAnchorEpisode &&
            data.allAnchorEpisode.map(({ node }: any) => (
              <div className="is-parent column is-6" key={node.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${
                    node.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header>                    
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={node.fields.slug}
                      >
                        {node.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {node.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    {node.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={node.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </article>
              </div>
            ))}
        </div>
      )
}

export default EpisodeRoll;

export const episodeData = graphql`
    query EpisodeQuery {
        allAnchorEpisode {
            edges {
            node {
                id
                content
                link
                pubDate
            }
            }
            totalCount
        }
        anchorPodcast {
            id
            image {
            link
            url
            title
            }
        }
    }
`;