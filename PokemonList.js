import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const PokemonList = ({
  pokemon,
  favorites,
  loading,
  error,
  toggleFavorite,
}) => {
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
      />
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <FlatList
      data={pokemon}
      keyExtractor={(item) =>
        item.name
      }
      renderItem={({ item }) => {
        const favorite =
          favorites.includes(
            item.name
          );

        return (
          <TouchableOpacity
            onPress={() =>
              toggleFavorite(
                item.name
              )
            }
          >
            <View
              style={{
                padding: 20,
                borderBottomWidth: 1,
              }}
            >
              <Text>
                {item.name}
                {favorite
                  ? ' ❤️'
                  : ''}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PokemonList;
