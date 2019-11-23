import React from 'react';
import f_delivery from './assets/exercises/f-delivery.png';
import coin from './assets/exercises/coin.png';
import chat from './assets/exercises/chat.png';
import './App.css';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <div>
        <HobbyList
          listHeader="Extreme Hobbies"
          hobbies={['Skydiving', 'Bungee Jumping', 'Rock Climbing']}
        />
      </div>
      <div className="guarantee-div">
        <Guarantee
          image={f_delivery}
          title="Free shipping"
          para="As a Prime member enjoy fast, FREE delivery on over 100 million items."
        />
        <Guarantee
          image={coin}
          title="100% Money back"
          para="We're willing to offer you an unconditional and risk-free 7-day money-back guarantee."
        />
        <Guarantee
          image={chat}
          title="Online support 24/7"
          para="Get support anywhere.
          Use the Support app to talk to an expert anytime."
        />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
