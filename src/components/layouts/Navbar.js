import classes from './Navbar.module.css';
import { Link } from 'react-router-dom'

export default function Navbar()
{
    return (
        <header className={classes.header}>
            <div className={classes.logo}>StarWars API App</div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/planets'>Planets</Link></li>
                </ul>
            </nav>
        </header>
        /* <Menu inverted>
        <Container>
        <Link to='/'>
            <Menu.Item name="Star Wars App"></Menu.Item>
        </Link>
        <Link to='/planets'>
            <Menu.Item name="Planets"></Menu.Item>
        </Link>
        </Container>
        </Menu> */
    );
}
