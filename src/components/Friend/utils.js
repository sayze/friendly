import faker from 'faker'

/**
 * Generate dummy friend data.
 * @param qty
 * @returns {[]}
 */
export const fakeFriends = qty => {
  const friends = []
  for (let i = 0; i < qty; i++) {
    friends.push({
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      info: 'Last updated 20 minutes ago',
      img: faker.image.avatar(),
    })
  }
  return friends
}
