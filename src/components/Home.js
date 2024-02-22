import React from 'react'
import { Card } from 'semantic-ui-react'

export default function Home() {
  return (
    <>
        <Card centered>
            <Card.Content>
            <Card.Header>Star Wars</Card.Header>
                <Card.Description>
                    <img width='250px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhNPkJBeTHxee9QdgVxw8SVVVYxDo4jpl9UR7KDwkcA&s' alt='star wars logo' />
                    <p>Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.<br /> 
                        The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.<br />
                        Star Wars is one of the highest-grossing media franchises of all time.
                    </p>
                </Card.Description>
            </Card.Content>
        </Card>
    </>
  )
}
