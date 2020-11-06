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

import axios from 'axios';
import Header from "./components/Header";

const fontSize = 80;
const Spin = <i className="fas fa-sync-alt rc-loading-spin" style={{ fontSize }} />;

class App extends React.Component {

  // State of your application
  state = {
    posts: [],
    error: null,
    loading: true
  }

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('https://composerscape-api.herokuapp.com/posts?_sort=created_at:desc');
      this.setState({
        posts: response.data,
        loading: false
      })
    } catch(error) {
      this.setState({
        error,
        loading: false,
      })
    }
  }

  render() {
    const { error, posts, loading } = this.state

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
              { ({ match }) => <HomePage posts={posts} loading={true} show={match !== null} path={'/'} /> }
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
