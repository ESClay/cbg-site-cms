import Layout from "../components/Layout";
import React from "react";
//import * as GraphQlGen from "../generated/graphql";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Content, {HTMLContent} from "../components/Content";
import AudioPlayer from "react-h5-audio-player"

const EpisodePost : React.FunctionComponent<any> = ({data} : any) => {
    console.info(data);
    const {title, content, enclosure} = data.anchorEpisode;
    console.info(title);
    console.info(content);
    console.info(enclosure);
    const EpisodeContent = HTMLContent || Content;
    return (<Layout>

    <section className="section">
        <Helmet titleTemplate="%s || Podcast Episodes">
            <title>{title}</title>
        </Helmet>
        <div className="container content">
            <div className="columns">
                <div className="column is-10 is-offset-1">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                    {title}
                </h1>            
                <p><AudioPlayer controls src={enclosure!.url!} itemType={enclosure!.type!}/></p>            
                <EpisodeContent content={content} />            
                </div>
            </div>
        </div>
    </section>
    </Layout>);
}

export default EpisodePost;

export const episodeQuery = graphql`
    query EpisodeById($id: String!) {
        anchorEpisode(id: {eq: $id}) {
            id
            content
            title
            link
            isoDate
            enclosure{
                url
                length
                type
            }         
        }
    }
`;