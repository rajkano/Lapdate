/* eslint-disable no-multiple-empty-lines */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// eslint-disable-next-line no-unused-vars
import rootReducer, { initialState } from './reducers'
import { rootSaga } from './saga/index'

// eslint-disable-next-line no-unused-vars
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const persistConfig = {
  key: 'root',
  storage
}

// eslint-disable-next-line no-unused-vars
const persistedReducer = persistReducer(persistConfig, rootReducer)


// eslint-disable-next-line no-use-before-define
function configureStore (initialStateArg = initialState) {
  const store = createStore(
    rootReducer,
    initialStateArg,
    bindMiddleware([sagaMiddleware])
  )

  // persistStore(store);

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return store
}

export default configureStore
