import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'
// const SagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
// const enhancer = composeEnhancers(applyMiddleware(SagaMiddleware)) 
const store = createStore(reducer,enhancer)
// createSagaMiddleware.arguments(mySagas)
// const store = createStore(
//   reducer,
//   applyMiddleware(thunk)
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  

// )
export default store