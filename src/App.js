import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import Planets from './components/Planets';

function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPlanets();
  },[]);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/planets' element={<Planets />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
