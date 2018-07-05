const Joi = require('joi');

module.exports = {

    register(req, res, next) {
        const schema = {
            username: Joi.string().required(),
            password: Joi.string().min(8),
            firstname: Joi.string().required(),
            lastname: Joi.string().required()
        }

        const {error} = Joi.validate(req.body, schema);

        if(error) {
            res.status(400).send({
                error : error.details[0].message
            });
        } else {
            next();
        }
        
    },

    login(req, res, next) {
        const schema = {
            username: Joi.string().required(),
            password: Joi.string().required()
        }

        const {error} = Joi.validate(req.body, schema);

        if(error) {
            res.status(400).send({
                error : error.details[0].message
            });
        } else {
            next();
        }
        
    },

}