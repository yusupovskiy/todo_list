import React, { Fragment } from 'react';
import Header from './components/header';
import Routes from './routes';
import Footer from './components/footer';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;