const {User} = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            });
            res.send(user);
        } catch(err) {
            res.status(500).send({error: 'Error occured while getting user.'});
        }
    }
}