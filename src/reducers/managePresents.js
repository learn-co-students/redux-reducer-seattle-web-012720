export function managePresents(state, action){
    state = {...state, 
        numberOfPresents: 0
    }
    if (action.type === "INCREASE") {
        state = {...state, numberOfPresents: state.numberOfPresents + 1}
    }
    return state
}
