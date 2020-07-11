import axios from 'axios'

const baseUri = endpoint => `http://localhost:4040/${endpoint}`

export const getFriends = (query = '') => {
  return axios.get(baseUri('friend', { search: query }))
}

export const addFriend = (name, image = '') => {
  return axios.post(baseUri('friend'), { name, image })
}

export const deleteFriend = id => {
  return axios.delete(baseUri(`friend/${id}`))
}
export const updateFriend = (id, name, image = '') => {
  return axios.patch(baseUri('friend'), { id, name, image })
}
