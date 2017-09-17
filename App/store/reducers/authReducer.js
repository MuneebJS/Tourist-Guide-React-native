import authActions from "./../actions/authConst"

const INITIAL_STATE = {
    authUser: {},
    isRegistered: false,
    isAuthenticated: false,
    errorMessage: 'No error',
    isSuccess: false,
    isRejected: false,
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authActions.SIGNUP:
            return {
                ...state,
                isRegistered: true,
                isAuthenticated: true
            }
        // case authActions.SIGNUP:
        //     return {
        //         ...state,
        //         isAuthenticated: true
        //     }
        case authActions.SIGNUP_SUCCESSFUL:
            return {
                ...state,
                isSuccess: true,
                errorMessage : {},
                isRejected: false
            }
        case authActions.SIGNUP_REJECTED:
        return {
            ...state,
            isRejected: true,
            errorMessage: action.payload
        }
        default: return state
    }
}
