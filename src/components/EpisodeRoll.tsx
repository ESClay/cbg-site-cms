import {graphql, StaticQuery, Link} from "gatsby";
import React from "react";
//import Episode from "../models/Episode";
import Data from "../models/Data";
// import AllEpisodes from "../models/AllEpisodes";
// import Episode from "../models/Episode";
//import AudioPlayer from "react-h5-audio-player";



const EpisodeRoll : React.FunctionComponent<Data> = ({allAnchorEpisode}) => {    
    //console.info(data);
    console.info(allAnchorEpisode);
    console.info(allAnchorEpisode.allAnchorEpisode.edges);
    return (
        
        <div className="columns is-multiline">
          {allAnchorEpisode.allAnchorEpisode.edges &&
            allAnchorEpisode.allAnchorEpisode.edges.map(edge => (

              <div className="is-parent column is-6" key={edge.node.id}>
                <article
                  className={`blog-list-item tile is-child box notification`}
                >
               
                  <header>                    
                    <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={edge.node.link}
                    >
                      {edge.node.title}
                    </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {edge.node.pubDate}
                      </span>
                    </p>
                  </header>
                  <p>
                      <audio controls src={edge.node.enclosure.url} itemType={edge.node.enclosure.type}/>
                      {/* <AudioPlayer 
                        src={edge.node.enclosure.url}
                      /> */}
                      <br/>
                      <br/>
                    <span dangerouslySetInnerHTML={createMarkup(edge.node.content)}/>
                    <br />
                    <br />
                    
                  </p>
                </article>
              </div>
            ))}
        </div>
      )
}

export function createMarkup(markup: string){
    return {__html: markup};
}

export default () => (
    <StaticQuery
        query={
            graphql`
                query {
                    allAnchorEpisode {            
                        edges {
                            node {
                                title
                                id
                                content
                                contentSnippet
                                link
                                pubDate
                                enclosure{
                                    url
                                    length
                                    type
                                  }                                
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
            `
        }
        render={ data => <EpisodeRoll allAnchorEpisode={data}/> }
    />
)
//export default EpisodeRoll;

