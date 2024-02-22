import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default function Navbar()
{
    return (
        <Menu inverted>
        <Container>
        <Link to='/'>
            <Menu.Item name="Star Wars App"></Menu.Item>
        </Link>
        <Link to='/planets'>
            <Menu.Item name="Planets"></Menu.Item>
        </Link>
        </Container>
        </Menu>
    );
}