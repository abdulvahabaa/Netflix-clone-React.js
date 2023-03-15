
import './App.css';
import React from 'react';
import { action, comedy, documentaries, horror, originals, romance, trending } from './urls';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={romance} title='Roamnce' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />

      
    </div>
  );
}

export default App;
