const User = require('../models/User');

const UserController = {
    async create(req, res) {
        const user = new User(req.body);

        try {
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({
                error: error.message
            });
        }
    },
    async update(req, res) {},
    async delete(req, res) {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.send(user);
    },
    async getAll(req, res) {
        const users = await User.find();
        res.json(users);
    },
    async getOne(req, res) {}
}

module.exports = UserController;