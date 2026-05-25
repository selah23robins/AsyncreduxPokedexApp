import React, {
  useEffect,
} from 'react';

import { connect } from 'react-redux';

import PokemonList from
  '../components/PokemonList';

import {
  fetchPokemon,
  toggleFavorite,
} from '../redux/actions';

const PokemonContainer = ({
  pokemon,
  favorites,
  loading,
  error,
  fetchPokemon,
  toggleFavorite,
}) => {
  useEffect(() => {
  fetchPokemon();
}, [fetchPokemon]);

  return (
    <PokemonList
      pokemon={pokemon}
      favorites={favorites}
      loading={loading}
      error={error}
      toggleFavorite={
        toggleFavorite
      }
    />
  );
};

const mapStateToProps = (
  state
) => ({
  pokemon: state.pokemon,
  favorites: state.favorites,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchPokemon,
  toggleFavorite,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonContainer);
