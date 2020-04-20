export function manageFriends(state, action){

    switch (action.type) {
        case 'ADD_FRIEND':
          return {...state, friends: [...state.friends, action.friend]
        }
        case 'REMOVE_FRIEND':
            //go to state, look for that friend object with that id, and then remove that object from state
            // const delFriend = state.friends.find(friend_obj => friend_obj.id === action.id)
          return {...state, friends: state.friends.filter(friend => friend.id !== action.id) }
        default:
          return state;
    }
}

// action = {
//     type: "REMOVE_FRIEND",
//     id: 1
//   }

// state = {
//     friends: [{},{}]
//     friend: {
//       name: "Chrome Boi"
//       homewtown: "NYC",
//       id: 1
//     }
//   }