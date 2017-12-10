import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore (
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}