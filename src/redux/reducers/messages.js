import { RECEIVE_MSG, SENT_MSG } from "../actions";

const initialState = {
    list: {}
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SENT_MSG:
            let send_messages = [...state.list[action.payload.receiver] || [], action.payload];
            // if (send_messages) {
            console.log(state, action);
            return {
                ...state,
                list: { ...state.list, [action.payload.receiver]: [...send_messages] }
            }
        case RECEIVE_MSG:
            let user_messages = [...state.list[action.payload.sender] || [], action.payload];
            // if (user_messages) {
            console.log(state, action);
            return {
                ...state,
                list: { ...state.list, [action.payload.sender]: [...user_messages] }
            }
        // } else {
        //     return {
        //         ...state,
        //         list: { ...state.list, [action.payload.sender]: [action.payload] }
        //     }
        // }
        default:
            return state;
    }
}