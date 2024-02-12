import React, { useState } from 'react';
// components
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';

function App() {
  const [tab, setTab] = useState('all');
  const [cardData, setCardData] = useState([]);
  return (
    <div>
      <Navbar setTab={setTab} />
      {tab === 'all' && <Main setCardData={setCardData} />}
      {tab === 'card' && (
        <MyCard cardData={cardData} setCardData={setCardData} />
      )}
    </div>
  );
}

export default App;
