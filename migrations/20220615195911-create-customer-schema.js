'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {

      await queryInterface.sequelize.query(`CREATE SCHEMA customer`)
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
    
  }
};
