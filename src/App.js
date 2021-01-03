import React, { useEffect } from 'react';
import ImageLoader from './components/ImageLoader';
import ImageInput from './components/ImageInput';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  useEffect(() => {
    document.title = "Mars Image Classifier"
  }, []);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/curiosity">Curiosity Images</Link>
            </li>
            <li>
              <Link to="/upload-image">Upload an Image</Link>
            </li>
          </ul>
        </nav>

        <Switch>
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
