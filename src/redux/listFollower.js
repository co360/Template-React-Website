var initialState = {
  users: []
}

const listFollower = (state = initialState, action) => {
  let users = [...state.users];
  var index = -1;
  var id = '';
  switch (action.type) {
    case 'FETCH_FOLLOWER':
      return Object.assign({}, state, { users: action.user });
    case 'ADD_USER':
      // console.log({ action })
      users.push(action.user);
      return { ...state, users };
    case 'UPDATE_FOLLOWER':
      // console.log({ actionUpdate: action })
      id = action.user.id;
      index = findIndex(state, { id });
      if (index == -1) {
        users.push(action.user);
      } else {
        users[index] = action.user
      }

      // console.log('index', index)
      // users[index] = action.room;
      // console.log('users', users)
      // return { ...state, users };
      return { ...state, users };
    case 'DELETE_FOLLOWER':
      // console.log({ action })
      index = findIndex(state, action.id);

      users.splice(index, 1);
      return { ...state, users };
    default: return state;
  }
}

var findIndex = (users, id) => {
  let result = -1;
  users.users.forEach((user, index) => {
    if (user.id === id) {
      result = index;
    }
  });

  return result;
}

export default listFollower;
