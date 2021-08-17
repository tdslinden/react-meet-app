import { useContext } from 'react';

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouriteContext from '../../store/favourites-context';

function MeetupItem(props) {
  const favouriteContext = useContext(FavouriteContext);

  const itemIsFavourite = favouriteContext.itemIsFavourite(props.id);

  function toggleFavouriteHandler() {
    if (itemIsFavourite) {
      favouriteContext.removeFavourite(props.id);
    } else {
      favouriteContext.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
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
          <button onClick={toggleFavouriteHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
