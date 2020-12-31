import React, { useEffect } from 'react';
import ImageLoader from './components/ImageLoader';
const App = () => {
  useEffect(() => {
    document.title = "Mars Image Classifier"
  }, []);
  return (
    <ImageLoader />
  )
};


export default App; 
