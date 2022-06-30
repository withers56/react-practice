import {useContext} from "react";

import classes from './MeetupItem.module.css'
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    //gives us access to FavoriteContext object
    const favoritesCtx =  useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    function toggleMeetupStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }

    return (
        <li className={classes.item} key={props.id}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleMeetupStatusHandler}>{itemIsFavorite ? 'Remove from Favorites': 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;