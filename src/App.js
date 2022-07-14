import React from 'react';

import { Header } from './components';
import { PageNotFound } from './pages';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <PageNotFound />
        </div>
      </div>
    </div>
  );
}

export default App;
