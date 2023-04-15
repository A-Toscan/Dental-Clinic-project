"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "users",
         [
            {
               nombre: "Luis",
               apellidos: "Garganta",
               role_name: "doctor",
               email:"lusi@email.com",
               telefono: 23232323,
               id_user: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
          
            {
              nombre: "Dani",
              apellidos: "Molar",
              role_name: "doctor",
              email:"molar@email.com",
              telefono: 24242424,
              id_user: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
           },
          
           {
            nombre: "Maria",
            apellidos: "Gula",
            role_name: "doctor",
            email:"gula@email.com",
            telefono: 25252525,
            id_user: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
           {
            nombre: "Pep",
            apellidos: "Guardiola",
            role_name: "patient",
            email:"guardiola@email.com",
            telefono: 323232323,
            id_user: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
           {
            nombre: "Lionel",
            apellidos: "Messi",
            role_name: "patient",
            email:"messi@email.com",
            telefono: 7373737373,
            id_user: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
           {
            nombre: "Diego",
            apellidos: "Marandini",
            role_name: "patient",
            email:"marandini@email.com",
            telefono: 4343434343,
            id_user: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
           {
            nombre: "Nicola",
            apellidos: "Cage",
            role_name: "patient",
            email:"cage@email.com",
            telefono: 5858585858,
            id_user: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
           {
            nombre: "Johnny",
            apellidos: "Dante",
            role_name: "patient",
            email:"dante@email.com",
            telefono: 8989898989,
            id_user: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
           {
            nombre: "George",
            apellidos: "Cluno",
            role_name: "patient",
            email:"cluno@email.com",
            telefono: 92929292929,
            id_user: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
           {
            nombre: "Michael",
            apellidos: "Juno",
            role_name: "patient",
            email:"juno@email.com",
            telefono: 123123123123,
            id_user: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
           {
            nombre: "Claude",
            apellidos: "Vassel",
            role_name: "patient",
            email:"vassel@email.com",
            telefono: 976976976,
            id_user: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
          
         ],
        
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("users", {
        //  [Op.or]: [
        //     { nombre: "Luis" },
        //     { nombre: "Dani" },
        //     { nombre: "Maria" },
        //  ],
      });
   },
};
