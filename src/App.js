import React from 'react';
import './App.scss';

import SearchBarComp from './components/SearchBarComp'

import Footer from './components/footer';
import Head from './components/Head';

import CardsImages from './components/CardsImages';
import CardsImages2 from './components/CardsImages2';
import CarouselComp from './components/CarouselComp';

import News from './components/News';

function App() {
  return (

    <div className="header" >

      <Head/>
      <SearchBarComp/>
      <News className="news"/>
      
     

      <CardsImages/>
      <CardsImages2/>

      <CarouselComp/>
      <Footer/>
    
    </div>
    
  );
}

export default App;
