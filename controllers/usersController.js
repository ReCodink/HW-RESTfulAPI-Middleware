const models = require('../models');
const Users = models.Users;

const getAllUsers = async (request, response) => {
    try {
        const users = await Users.findAll();
        return response.json({
            data: users
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const getUserById = async (request, response) => {
    const id = request.params.id;
    try {
        const user = await Users.findByPk(id);
        if (!user) {
            return response.status(404).json({
                message: 'User Not Found'
            });
        }
        return response.json({
            data: user
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const createNewUser = async (request, response) => {
    try {
        const user = await Users.create(request.body);
        return response.status(201).json({
            message: 'User Created Successfully'
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const updateUserById = async (request, response) => {
    const id = request.params.id;
    try {
        const user = await Users.findByPk(id);
        if (!user) {
            return response.status(404).json({
                message: 'User Not Found'
            });
        }
        await Users.update(request.body, { where: { id: id } });
        return response.status(200).json({
            message: `User Updated Successfully at ID: ${id}`
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const deleteUserById = async (request, response) => {
    const id = request.params.id;
    try {
        const user = await Users.findByPk(id);
        if (!user) {
            return response.status(404).json({
                message: 'User Not Found'
            });
        }
        await user.destroy();
        return response.status(200).json({
            message: `User Deleted Successfully at ID: ${id}`
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
};
