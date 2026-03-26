const dotenv = require("dotenv");
const process = require("process");
dotenv.config({
    path: `./.env.${process.env.NODE_ENV || "development"}`,
});

console.log("ENV LOADED");
