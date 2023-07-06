import { ADDFAVORITE, DELETEFAVORITE } from "../actions/types";

const initialGlobalState = {
  favorites: [],
  characters: [],
  access: false,
  aunMas: [],
  detail: {}
};

export default function rootReducer(state = initialGlobalState, action) {
  // Nos fijabamos por el TYPE de la accion
  switch (action.type) {
    case ADDFAVORITE:
  
      return { ...state, favorites: [...state.favorites, action.payload], detail: {algo: "MESSI"} };
    case DELETEFAVORITE:
 
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return { ...state };
  }
}

// favorites [{1},{2},{3}]
// vs
// []
