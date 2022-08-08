import thunk from 'redux-thunk'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import AsyncStorage from '@react-native-community/async-storage'

import rootReducers from './reducers' // where reducers is a object of reducers

const config = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
}

const reducers = persistReducer(config, rootReducers)

const middlewares = [thunk]

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const createDebugger = require('redux-flipper').default
  middlewares.push(createDebugger())
}

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
)
const persistor = persistStore(store)

const ConfigureStore = () => {
  return { persistor, store }
}

export default ConfigureStore
