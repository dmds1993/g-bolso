import React from 'react';
import Routes from '../../routes'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const App = (props) => {
  return (
    <div>
      <Header/>
        <Routes/>
      <Footer/>
    </div>
  );
};

export default App;
