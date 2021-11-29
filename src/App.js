import React from 'react';
import Birds from './component/Birds';
import {Route} from 'react-router-dom';

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
      </main>
    </>
  );
}

export default App;
