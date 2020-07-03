import faker from 'faker'

/**
 * Generate dummy friend data.
 * @param qty
 * @returns {[]}
 */
export const fakeFriends = (qty = 0, noImage = 0) => {
  const friends = []
  let noImageCt = 0

  for (let i = 0; i <= qty; i++) {
    friends.push({
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      info: 'Last updated 20 minutes ago',
      img: noImageCt <= noImage ? faker.image.avatar() : '',
    })
    noImageCt++
  }
  return friends
}
