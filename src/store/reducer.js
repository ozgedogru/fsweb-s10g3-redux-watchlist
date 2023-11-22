import { movies } from "../movies";
import { NEXT_MOVIE, PREV_MOVIE } from "../actions/actions";

const initialState = {
  movies: movies,
  currentMovie: 0,
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        currentMovie: state.currentMovie + 1,
      };

    case PREV_MOVIE:
      return {
        ...state,
        currentMovie: state.currentMovie - 1,
      };

    default:
      return state;
  }
};

export default reducer;
