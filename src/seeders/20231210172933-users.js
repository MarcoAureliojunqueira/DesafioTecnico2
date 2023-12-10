'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('User.models',  [{ 
      id: 1,
      name: 'Lewis Hamilton',
      email: 'lewishamilton@gmail.com',
      password: '123456',
     
    },
    {
      id: 2,
      name: 'Michael Schumacher',
      email: 'MichaelSchumacher@gmail.com',
      password: '123456',
  
    },
    ],, {});
    
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
