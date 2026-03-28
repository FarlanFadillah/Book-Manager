const dotenv = require("dotenv");
const process = require("process");
const path = require("path");
dotenv.config({
    path: path.resolve(`.env.${process.env.NODE_ENV || "development"}`),
});

console.log("ENV LOADED");
