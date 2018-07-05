const {User} = require('../models');

module.exports = {

    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user);
        } catch(err) {
            console.log(err);
            switch(err.fields[0]) {
                case 'username': res.status(400).send({error: 'Username already in use. Please try a different one.'}); break;
                default:  {
                    res.status(500).send({error: 'Error occured while tryig to register account.'});
                }
            }

        }
    },

    async login(req, res) {
        try {
            const user = await User.findOne({
                where : {
                    username: req.body.username,
                    password : req.body.password
                }
            });

            if(user) { 
                res.send(user.toJSON());
            } else {
                res.status(403).send({error:'Invalid credentials.'});
            }
        } catch(err) {
            console.log(err);
            res.status(500).send({error: 'Error occured while tryig to login.'});
        }
    }
};