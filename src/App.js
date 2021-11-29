import React from 'react';
import Birds from './component/Birds';
import {Route} from 'react-router-dom';
import BirdDetails from './BirdDetails';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
          <Route path = "/" exact component={Birds} />
          <Route path = "/details" component={BirdDetails} />
      </main>
    </>
  );
}

export default App;
