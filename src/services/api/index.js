import axios from 'axios'

const baseUri = endpoint => `http://localhost:4040/${endpoint}`

export const getFriends = (query = '') => {
  const endpoint = query.length > 0 ? `friend?search=${query}` : 'friend'
  return axios.get(baseUri(endpoint))
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