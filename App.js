import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';

import PokemonContainer from './containers/PokemonContainer';

import { store, persistor } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" />}
        persistor={persistor}
      >
        <PokemonContainer />
      </PersistGate>
    </Provider>
  );
}
