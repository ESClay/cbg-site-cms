import { graphql } from "gatsby";
import {TemplateWrapper as Layout} from '../../components/Layout';
import * as React from "react";

export class EpisodeList extends React.Component {
  public render: any = () =>{
    return <Layout/>;
  }
}

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
