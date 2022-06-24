'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {

      await queryInterface.sequelize.query(`CREATE SCHEMA post`)
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
    
  }
};
