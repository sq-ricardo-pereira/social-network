'use strict';

const faker = require('@faker-js/faker').faker;

const USERS = [];

function createRandomUser() {
  return {
    user_name: faker.random.alphaNumeric(14),
    date_joined: faker.date.between('2020-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName()
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});

const tableName = 'profile'
const schema = 'customer'

console.log(USERS)
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert({ tableName, schema }, USERS, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
