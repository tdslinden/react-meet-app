import { useContext } from "react";

import FavouriteContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favouriteContext = useContext(FavouriteContext);

  let content;

  if (favouriteContext.totalFavourites === 0) {
    content = <p>Add favourites.</p>;
  } else {
    content = <MeetupList meetups={favouriteContext.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
