import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import classes from './Planets.module.css';

export default function Planets({ data }) {
  return (
    <>
      <h1>Star Wars Planets</h1>
      <Grid columns={2}>
        {data && data.map((planet, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <div className={classes.content}></div>
                  <h3>Planet Name: {planet.name}</h3>
                  <p><strong>Climate: </strong>{planet.climate}</p>
                  <p><strong>Population: </strong>{planet.population}</p>
                  <p><strong>Terrain: </strong>{planet.terrain}</p>
                    <div className={classes.actions}>
                      <button><Link to={`/residents/${i}`}>Residents Info</Link></button>
                    </div>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}
