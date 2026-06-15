const userService = require("../services/user.service");

const createUser = (req, res) => {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
};

const getUsers = (req, res) => {
    res.json(userService.getUsers());
};

module.exports = {
    createUser,
    getUsers
};