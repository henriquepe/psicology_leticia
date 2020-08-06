import React from 'react';
import {Global} from './styled-components/global'
import Routes from './routes/index'
import {BrowserRouter as Router} from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
        <Routes/>
        <Global/>
      </Router>
    </>
  );
}

export default App;
