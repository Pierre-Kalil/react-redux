import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";
import { userReducer } from "./user/reducers";
import { productReducer } from "./product/reducers";
import { loginReducer } from "./login/reducers";
import { categoryReducer } from "./category/reducers";
import { brandReducer } from "./brand/reducers";
import { statesModelReducer } from "./statesModel/reducers";

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  login: loginReducer,
  category: categoryReducer,
  brand: brandReducer,
  statesModel: statesModelReducer,
});

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(persistedReducer, applyMiddleware(thunk));
const store = createStore(reducers, applyMiddleware(thunk));
// const persistor = persistStore(store);

export { store };
