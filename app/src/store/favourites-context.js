import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetup) => {},

}); // component

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);
    
    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler,
    };

    return (<FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>);
}

export default FavouriteContext;