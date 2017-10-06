import * as Types from './../constants/actionTypes';

const auth_reducer = (state = {}, action) => {
    switch(action.type){
        case Types.LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS");
            // return Object.assign({}, state, { auth: action.payload });
            return action.payload;  
        case Types.LOGOUT_SUCCESS:
            return null;
        case Types.LOGIN_FAIL:
            return state;
        case Types.SIGNUP_SUCCESS:
            console.log("SIGNUP_SUCCESS");
            break;
        case Types.SIGNUP_FAIL:
            return state;
        default:
            return state;
    }
}

export default auth_reducer;