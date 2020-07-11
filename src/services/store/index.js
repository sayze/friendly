export const SET_FRIENDS = 'set'
export const ADD_FRIEND = 'add'
export const UPDATE_FRIEND = 'update'
export const DELETE_FRIEND = 'delete'

export default {
  setFriends: friends => ({ type: SET_FRIENDS, payload: friends }),
  addFriend: friend => ({ type: ADD_FRIEND, payload: friend }),
  updateFriend: friend => ({ type: UPDATE_FRIEND, payload: friend }),
  deleteFriend: id => ({ type: DELETE_FRIEND, payload: { id } }),
}

export { default as useStore } from './useStore'
