const request = require("request-promise");
const cheerio = require("cheerio");
const express = require("express");
const router = express.Router();
const { getProperties } = require("../controller/properties");


router.get("/getProperties", getProperties)


module.exports = router;

