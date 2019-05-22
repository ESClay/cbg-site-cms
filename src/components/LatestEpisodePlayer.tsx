import React from "react";
import { Link } from "@reach/router";
import _ from "lodash";
import AudioPlayer from "react-h5-audio-player";


const LatestEpisodePlayer : React.FunctionComponent<any> = ({data}) => {
    console.info(data);
    console.info(data.allAnchorEpisode);
    return (
        <div className="container content">
            {data.allAnchorEpisode.edges &&
            data.allAnchorEpisode.edges.map((edge:any) => (
            <div className="columns" key={edge.node.id}>
                <div className="column is-10">
                <header>                    
                    <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={'/episodes/' + _.kebabCase(edge.node.title) }
                    >
                      {edge.node.title}
                    </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {edge.node.pubDate}
                      </span>
                    </p>
                  </header>
                  <div>
                      <span className="is-block"
                      ><br/><AudioPlayer src={edge.node.enclosure!.url!} itemType={edge.node.enclosure!.type!}/></span>            
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default LatestEpisodePlayer;
// export const LatestEpisodeQuery = graphql`
//     query LatestEpisode {
//         allAnchorEpisode(limit: 1) {
//             edges{
//                 node{
//                     title
//                     enclosure {
//                         url
//                         type
//                     }
//                 }
//             }
//         }
//     }
// `;