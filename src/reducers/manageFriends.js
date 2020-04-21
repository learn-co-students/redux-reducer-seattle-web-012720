export function manageFriends(state, action){
    // state = {...state, friends: []}
    switch (action.type) {
        case "ADD_FRIEND":
            state = Object.assign({}, state, {friends: [...state.friends, action.friend]})
        break;
        case "REMOVE_FRIEND":
            state = Object.assign({}, state, {friends: state.friends.filter(friend => friend.id !== action.id)})
        break;
        default: return state

    }
    return state
}


// export function managePresents(state, action){
//     state = {...state, 
//         numberOfPresents: 0
//     }
//     if (action.type === "INCREASE") {
//         state = {...state, numberOfPresents: state.numberOfPresents + 1}
//     }
//     return state
// }
