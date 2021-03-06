import axios from 'axios'

const baseUri = endpoint =>
  process.env.NODE_ENV === 'production'
    ? `https://friendly-api.sayedsadeed.com/${endpoint}`
    : `http://localhost:4040/${endpoint}`

export const getFriends = (query = '') => {
  const endpoint = query.length > 0 ? `friend?search=${query}` : 'friend'
  return axios.get(baseUri(endpoint))
}

export const addFriend = (name, image = null) => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('image', image)
  return axios.post(baseUri('friend'), formData)
}

export const deleteFriend = id => {
  return axios.delete(baseUri(`friend/${id}`))
}
export const updateFriend = (id, name, image = null) => {
  const formData = new FormData()
  formData.append('id', id)
  formData.append('name', name)
  formData.append('image', image)
  return axios.patch(baseUri('friend'), formData)
}
