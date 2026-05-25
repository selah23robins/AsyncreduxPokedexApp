export const FETCH_POKEMON_LOADING =
  'FETCH_POKEMON_LOADING';

export const FETCH_POKEMON_SUCCESS =
  'FETCH_POKEMON_SUCCESS';

export const FETCH_POKEMON_ERROR =
  'FETCH_POKEMON_ERROR';

export const TOGGLE_FAVORITE =
  'TOGGLE_FAVORITE';

export const fetchPokemon =
  () => async (dispatch) => {
    dispatch({
      type: FETCH_POKEMON_LOADING,
    });

    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=20'
      );

      if (!response.ok) {
        throw new Error(
          'Failed to fetch Pokemon'
        );
      }

      const data = await response.json();

      dispatch({
        type: FETCH_POKEMON_SUCCESS,
        payload: data.results,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POKEMON_ERROR,
        payload: error.message,
      });
    }
  };

export const toggleFavorite = (name) => ({
  type: TOGGLE_FAVORITE,
  payload: name,
});
