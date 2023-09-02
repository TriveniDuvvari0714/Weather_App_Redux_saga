import { createStore, applyMiddleware ,compose} from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/reducers";
import rootSaga from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
