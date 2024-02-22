import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import classes from './Planets.module.css';

export default function Planets({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const planetsPerPage = 2; 

  const indexOfLastPlanet = currentPage * planetsPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
  const currentPlanets = data.slice(indexOfFirstPlanet, indexOfLastPlanet);

  const totalPages = Math.ceil(data.length / planetsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <h1>Star Wars Planets</h1>
      <Grid columns={2}>
        {currentPlanets.map((planet, i) => (
          <Grid.Column key={i}>
            <Card>
              <div className={classes.content}>
                <h3>Planet Name: {planet.name}</h3>
                <p><strong>Climate: </strong>{planet.climate}</p>
                <p><strong>Population: </strong>{planet.population}</p>
                <p><strong>Terrain: </strong>{planet.terrain}</p>
                <div className={classes.actions}>
                  <button><Link to={`/residents/${indexOfFirstPlanet + i}`}>Residents Info</Link></button>
                </div>
              </div>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
      <div className={classes.actions}>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
      </div>
    </>
  );
}
