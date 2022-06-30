import {Link} from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from './MainNav.module.css'
import {useContext} from "react";

function MainNav() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>LoGo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites<span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav;