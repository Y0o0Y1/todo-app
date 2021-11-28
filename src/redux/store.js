import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, allReducers);

export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export let persistor = persistStore(store);
