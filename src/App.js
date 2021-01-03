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
          <div>
            <Link to="/" style={{ padding: '20px', marginTop: '20px' }}>Home</Link>
            <Link to="/curiosity" style={{ padding: '20px' }}>Curiosity Images</Link>
            <Link to="/upload-image" style={{ padding: '20px' }}>Upload an Image</Link>
          </div>
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
