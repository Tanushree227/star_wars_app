import classes from './Navbar.module.css';
import { Link } from 'react-router-dom'

export default function Navbar()
{
    return (
        <header className={classes.header}>
            <div className={classes.logo}>SWAPI App</div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/planets'>Planets</Link></li>
                </ul>
            </nav>
        </header>
    );
}
