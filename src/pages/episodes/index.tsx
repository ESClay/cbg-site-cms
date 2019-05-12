import Layout from "../../components/Layout";
import React from 'react';
import EpisodeRoll from "../../components/EpisodeRoll"
//import Helmet from 'react-helmet';

// export class EpisodeList extends React.Component {
//   public render: any = () =>{
//     return <Layout/>;
//   }
// }



const EpisodeList : React.FunctionComponent = () => {
    return (
        <Layout>
<div
          className="full-width-image-container margin-top-0"
        //   style={{
        //     backgroundImage: `url('/img/blog-index.jpg')`,
        //   }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <EpisodeRoll />
            </div>
          </div>
        </section>
        </Layout>
    );
}

export default EpisodeList;


