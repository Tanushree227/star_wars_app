import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import Planets from './components/Planets';
import Residents from './components/Residents';

function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPlanets();
  },[]);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading....</Loader>
          </Dimmer>
        ) : (
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/planets' element={<Planets data={planets} />} />
            <Route exact path='/residents' element={<Residents />} />
          </Routes>
        )}
        </Container>
      </Router>
    </>
  );
}

export default App;
