import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'

import Router from './src/routes'
import ConfigureStore from './src/stores'
import { GetContext } from './src/components'

const App = () => {
  const Context = GetContext()
  const stores = ConfigureStore()
  return (
    <Provider store={stores.store}>
      <PersistGate persistor={stores.persistor}>
        <Context.DataProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </Context.DataProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
