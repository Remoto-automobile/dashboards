import { combineReducers } from 'redux'
import AdminLogin from './auth.reducer'

const appReducer = combineReducers({
    AdminLogin,
})

function rootReducer(state, action) {
    if (action.type === "USER_LOGOUT") {
        state = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;