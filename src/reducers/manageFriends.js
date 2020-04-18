const INITIAL_STATE = {
    friends: []
}

export function manageFriends(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                ...state,
                friends: [...state.friends, action.friend]
            }
        case 'REMOVE_FRIEND':
            return {
                ...state,
                friends: [...state.friends.filter(person => person.id != action.id)]
            }
        default:
            return state
    }
}
