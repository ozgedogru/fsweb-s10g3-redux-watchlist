export const NEXT_MOVIE = "NEXT_MOVIE";
export const PREV_MOVIE = "PREV_MOVIE";
export const ADD_FAV = "ADD_FAV";
export const DEL_FAV = "DEL_FAV";

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const prevMovie = () => {
  return { type: PREV_MOVIE };
};

export const addFavorite = (movie) => {
  return { type: ADD_FAV, payload: movie };
};

export const delFavorite = (id) => {
  return { type: DEL_FAV, payload: id };
};
