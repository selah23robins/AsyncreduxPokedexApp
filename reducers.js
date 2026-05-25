import {
  FETCH_POKEMON_LOADING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR,
  TOGGLE_FAVORITE,
} from './actions';

const initialState = {
  pokemon: [],
  favorites: [],
  loading: false,
  error: null,
};

const pokemonReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_POKEMON_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };

    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TOGGLE_FAVORITE: {
  const exists =
    state.favorites.includes(
      action.payload
    );

  return {
    ...state,
    favorites: exists
      ? state.favorites.filter(
          (p) => p !== action.payload
        )
      : [
          ...state.favorites,
          action.payload,
        ],
  };
}

      

    default:
      return state;
  }
};

export default pokemonReducer;
