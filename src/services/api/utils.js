import faker from 'faker'

/**
 * Generate dummy friend data.
 * @param qty
 * @param noImage number of records to not have an image
 * @returns {[]}
 */
export const fakeFriends = (qty = 0, noImage = 0) => {
  const friends = []
  let noImageCt = 0

  for (let i = 0; i < qty; i++) {
    friends.push({
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      info: 'Last updated 20 minutes ago',
      image: noImageCt <= noImage && noImage ? '' : faker.image.avatar(),
    })
    noImageCt++
  }
  return friends
}

/**
 * Make fake request.
 * @param provider
 * @param success
 * @param delay
 * @returns {Promise<unknown>}
 */
export const fakeRequest = (provider = {}, success = true, delay = 3000) => {
  return new Promise((resolve, reject) => setTimeout(() => (success ? resolve(provider) : reject(provider())), delay))
}
