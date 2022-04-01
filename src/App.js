import { Outlet, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Beers } from './components/Beers';
import { Home } from './components/Home';
import { NewBeer } from './components/NewBeer';
import { RandomBeer } from './components/RandomBeer';

function ErrorHandle() {
  return <div>Sorry, we don't have this page!</div>
}

function LayoutComponent() {
  return (
    <div>
      <Link to="/"> ⌂ HOME </Link>
      <div>
        <Outlet />
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='*' element={<ErrorHandle />} />
        <Route path="/" element={<Home />} />
        <Route element={ <LayoutComponent /> }>   {/* wrapper for all subsequent components */}
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
