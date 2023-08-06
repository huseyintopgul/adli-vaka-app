import { combineReducers, createStore } from "redux";
import hastaReducer from "./hasta-reducer";

const rootReducer = combineReducers({
    hastaKayitlari: hastaReducer
});
const store = createStore(rootReducer);

export default store

export type RootReducer = ReturnType<typeof rootReducer>;