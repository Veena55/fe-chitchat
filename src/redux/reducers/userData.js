import { LOGIN_USER } from "../actions";


const initialState = {
    profile: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            // console.log(action.payload, action);
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state;
    }
}