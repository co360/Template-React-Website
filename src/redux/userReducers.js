var initialState = {
    token: {
        "token": "customer",
        // "expiredAt": "2018-04-11T10:15:00.384Z"
    },
    // uuid: '',
    user: {
       
    },
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_TOKEN":
            // console.log({ action })
            return Object.assign({}, state, { token: action.token })
        case "SET_USER_INFO":
            console.log({ action })
            return Object.assign({}, state, { user: action.data })
        default:
            return state;
    }
}

export default userReducer;