"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert("books", [
            { title: "1984", author: "George Orwell", year: 1949 },
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                year: 1925,
            },
            { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                year: 1960,
            },
            {
                title: "One Hundred Years of Solitude",
                author: "Gabriel García Márquez",
                year: 1967,
            },
            {
                title: "The Hunger Games",
                author: "Suzanne Collins",
                year: 2008,
            },
            { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
            { title: "The Shining", author: "Stephen King", year: 1977 },
            {
                title: "The Girl with the Dragon Tattoo",
                author: "Stieg Larsson",
                year: 2005,
            },
            {
                title: "Gone with the Wind",
                author: "Margaret Mitchell",
                year: 1936,
            },
            {
                title: "The Bourne Identity",
                author: "Robert Ludlum",
                year: 1980,
            },
            { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
            { title: "The Outsiders", author: "S.E. Hinton", year: 1967 },
            {
                title: "Where the Crawdads Sing",
                author: "Delia Owens",
                year: 2018,
            },
            {
                title: "The Seven Husbands of Evelyn Hugo",
                author: "Taylor Jenkins Reid",
                year: 2017,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("books", null, {});
    },
};
