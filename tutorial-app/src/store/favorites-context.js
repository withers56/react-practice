import {createContext, useState} from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    //initailze empty pointers to functions, pass them a paramater for IDE autocompletion, not necessaruy
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}

});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])


    //better way of updating state if you depend on a previous version
    function addFavoritesHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function removeFavoritesHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;