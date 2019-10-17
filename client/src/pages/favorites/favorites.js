import React, { useState } from "react";

import ArtCard from '../../components/ui/ArtCard/ArtCard';

const Favorites = (props) => {
  const [favorites, setFavorites] = useState([]);

  // TODO render function to render artcards based on favorites state
  // favorites state holds array of favorited artwork objects

  return (
    <div>
         <ArtCard url='https://images.squarespace-cdn.com/content/v1/537ba3cfe4b0a692d3dd363c/1521671475651-1RYWGTSWZCK0T2N0IGGY/ke17ZwdGBToddI8pDm48kPyxK6AB3zgGizbLyl3cQLF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hHMyhIh2kKzuOL3ydJCryA1F0gmNLmEt4Nikyd91URavr8Aoi-yShiL3L-0iJr14g/40+X+6036+LAYERS+OF+LIFE+%26+SEA.jpg?format=150w' artist="Patricia Qualls" title="Title" date='2015' dimensions="48 x 72" />
    </div>
  );
}

export default Favorites;


