export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        default: return state;
        case 'ADD_FRIEND': return state = { friends: [...state.friends, action.friend] }
        case 'REMOVE_FRIEND': return state = { friends: [...state.friends.filter(friend => friend.id !== action.id)]}
    }
}
