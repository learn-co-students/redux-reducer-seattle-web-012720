const INITIAL_STATE = {
    numberOfPresents: 0
}

export function managePresents(state = INITIAL_STATE, action){
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                numberOfPresents: state.numberOfPresents +1
            }
        default:
            return state
    }
}
