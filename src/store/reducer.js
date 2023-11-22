import { movies } from "../movies";
import { NEXT_MOVIE, PREV_MOVIE, ADD_FAV, DEL_FAV } from "../actions/actions";

const initialState = {
  movies: movies,
  currentIndex: 0,
  favMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };

    case PREV_MOVIE:
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    case ADD_FAV:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };

    case DEL_FAV:
      return {
        ...state,
        favMovies: state.favMovies.filter((m) => m.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
