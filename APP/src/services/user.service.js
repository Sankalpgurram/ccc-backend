const users = [];

const createUser = (user) => {
    users.push(user);
    return user;
};

const getUsers = () => {
    return users;
};

module.exports = {
    createUser,
    getUsers
};