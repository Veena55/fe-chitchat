import { UPDATE_FRIENDLIST } from "../actions";


const initialState = {
    list: []
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FRIENDLIST:
            // console.log(action.payload, action);
            return {
                ...state,
                list: [...state.list, ...action.payload]
            }
        default:
            return state;
    }
}