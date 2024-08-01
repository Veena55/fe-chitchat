import { combineReducers, createStore } from "redux";
import { messagesReducer } from "./reducers/messages";
import { friendsReducer } from "./reducers/friends";
import { userReducer } from "./reducers/userData";

const rootReducer = combineReducers({
    messages: messagesReducer,
    friends: friendsReducer,
    user: userReducer,
});

export const store = createStore(rootReducer);