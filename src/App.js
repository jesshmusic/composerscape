import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from "react-router-dom";
import styles from './App.module.scss';

import HomePage from "./pages/Home";
import Page from "./pages/Page";

import SiteBanner from './assets/images/SiteBanner.jpg';
import axios from 'axios';

class App extends React.Component {

  // State of your application
  state = {
    posts: [],
    error: null
  }

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('https://composerscape-api.herokuapp.com/posts');
      this.setState({ posts: response.data })
    } catch(error) {
      this.setState({ error })
    }
  }

  render() {
    const { error, posts } = this.state

    // Print errors if any
    if (error) {
      return <div>An error occurred: {error.message}</div>
    }

    return (
      <Router>
        <div className={styles.app}>
          <div className={styles.top}>
            <Link to={'/'} style={{backgroundImage: `url('${SiteBanner}')`}}>
              <span className={styles.hidden}>Jess Hendricks ComposersCAPE</span>
            </Link>
          </div>
          <Switch>
            <Route exact
                   path={`/`}
                   key={'0000'}
                   render={() => <HomePage posts={posts} />} />
            {posts.map(post =>
              <Route exact
                     path={`/posts/${post.id}`}
                     key={post.id}
                     render={() => <Page post={post} posts={posts} /> } />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
