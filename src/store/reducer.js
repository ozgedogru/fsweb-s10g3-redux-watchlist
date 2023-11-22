import { movies } from "../movies";
import { NEXT_MOVIE } from "../actions/actions";

const initialState = {
  movies: movies,
  currentMovieIndex: 0,
  favorites: [],
};

console.log(movies);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        currentMovieIndex: state.currentMovieIndex + 1,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
