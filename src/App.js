import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Beers } from './components/Beers';
import { Home } from './components/Home';
import { NewBeer } from './components/NewBeer';
import { RandomBeer } from './components/RandomBeer';

function ErrorHandle() {
  return <div>Sorry, we don't have this page!</div>
}

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='*' element={<ErrorHandle />} />
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
