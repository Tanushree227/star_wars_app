import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import Residents from './Residents'

export default function Planets({ data }) {
  return (
    <>
        <h1>Star Wars Planets</h1>
        <Grid columns={3}>
            {data.map((planet, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>Planet Name: {planet.name}</Card.Header>
                                <Card.Description>
                                    <strong>Climate</strong>
                                    <p>{planet.climate}</p>
                                    <strong>Population</strong>
                                    <p>{planet.population}</p>
                                    <strong>Terrain</strong>
                                    <p>{planet.terrain}</p>
                                    <Residents residentsURLs = {planet.residents} />
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </>
  )
}
