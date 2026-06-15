const express = require("express");
const router = express.Router();
const userHandler = require("../handlers/user.handler");

router.post("/", userHandler.createUser);
router.get("/", userHandler.getUsers);

module.exports = router;