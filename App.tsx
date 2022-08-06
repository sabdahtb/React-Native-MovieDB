import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Router from './src/routes'
import ConfigureStore from './src/stores'

const App = () => {
  const stores = ConfigureStore()
  return (
    <Provider store={stores.store}>
      <PersistGate persistor={stores.persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
