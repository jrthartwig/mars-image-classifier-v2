import React, { useEffect } from 'react';
import ImageLoader from './components/ImageLoader';
import ImageInput from './components/ImageInput';
import Home from './components/Home';
import Blog from './components/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  nav: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "25px",
    backgroundColor: "#003B73",
    paddingBottom: "25px"
  },
  link: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Courier New",
    fontSize: "20px"
  }
})

const App = () => {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Mars Image Classifier"
  }, []);
  return (
    <Router>
      <div>
        <nav className={classes.nav}>
          <div>
            <Link className={classes.link} to="/">Home</Link>
          </div>
          <div>
            <Link className={classes.link} to="/curiosity">Curiosity Images</Link>
          </div>
          <div>
            <Link className={classes.link} to="/upload-image">Upload an Image</Link>
          </div>
          <div>
            <Link className={classes.link} to="/blog">Blog</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/curiosity">
            <ImageLoader />
          </Route>
          <Route path="/upload-image">
            <ImageInput />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  )
};


export default App; 
