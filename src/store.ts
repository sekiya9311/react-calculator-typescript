import { connectRouter } from "connected-react-router";
import { History } from "history";
import { createStore, Store } from "redux";
import { IApplicationState, rootReducer } from './reducers/index';

export default function configureStore(
  history: History,
  initialState: IApplicationState
): Store<IApplicationState> {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
  );
  return store;
}
