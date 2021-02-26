import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

import styles from './App.module.scss';

import HomePage from "./pages/Home";
import Page from "./pages/Page";
import Header from "./components/Header";

import { getState } from './utilities/api'

const fontSize = 80;
export const Spin = <i className="fas fa-sync-alt rc-loading-spin" style={{ fontSize }} />;

class App extends React.Component {

  // State of your application
  state = {
    posts: [],
    error: null,
    loading: true,
    latestEpisodes: [],
    featuredArticle: null,
    otherFeaturedPosts: [],
    homeSubtitle: ''
  }

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    const siteState = await getState();
    this.setState(siteState, () => {
      if ( process.env.NODE_ENV === 'development' ) {
        console.log(process.env);
        console.log(this.state);
      }
    });
  }

  render() {
    const { error, posts, loading, latestEpisodes, featuredArticle, otherFeaturedPosts, homeSubtitle } = this.state

    // Print errors if any
    if (error) {
      return <div>An error occurred: {error.message}</div>
    }

    return (
      <Router>
        <div className={styles.app}>
          <Header />
          <LoadingMask loading={loading} indicator={Spin}>
            <Route exact
                   path={`/`}
                   key={'0000'}>
              { ({ match }) =>
                <HomePage
                  posts={posts}
                  loading={true}
                  show={match !== null}
                  path={'/'}
                  latestEpisodes={latestEpisodes}
                  featuredArticle={featuredArticle}
                  otherFeaturedPosts={otherFeaturedPosts}
                  homeSubtitle={homeSubtitle}
                /> }
            </Route>
            {posts.map((post, index) =>

              <Route path={`/posts/${post.id}`}
                     key={post.id}>
                { ({ match }) => <Page post={post}
                                       posts={posts}
                                       nextPost={index + 1 !== posts.length + 1 ? posts[index + 1] : false}
                                       prevPost={index !== 0 ? posts[index - 1] : false}
                                       path={`/posts/${post.id}`}
                                       loading={true}
                                       show={match !== null} /> }
              </Route>
            )}
          </LoadingMask>
        </div>
      </Router>
    );
  }
}

export default App;
