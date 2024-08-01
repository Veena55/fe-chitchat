//Action constants
export const SENT_MSG = "SENT_MSG";
export const RECEIVE_MSG = "RECEIVE_MSG";
export const UPDATE_FRIENDLIST = "UPDATE_FRIENDLIST";
export const LOGIN_USER = "LOGIN_USER";


//Action creators
export const sentMessage = (payload) => ({ payload, type: SENT_MSG });
export const receiveMessage = (payload) => ({ payload, type: RECEIVE_MSG });
export const updateFriendList = (payload) => ({ payload, type: UPDATE_FRIENDLIST });
export const userProfile = (payload) => ({ payload, type: LOGIN_USER });