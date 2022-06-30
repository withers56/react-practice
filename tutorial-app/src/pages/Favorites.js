import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupsList from "../componets/meetups/MeetupsList";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext)

    let content = "";

    if (favoritesCtx.totalFavorites === 0 ) {
        content = <p>You dont have any favorites.</p>
    } else {
        content = <MeetupsList meetups={favoritesCtx.favorites}/>
    }
    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;