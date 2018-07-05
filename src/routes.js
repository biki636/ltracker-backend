const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const UserController = require('./controllers/UserController');

module.exports = (app) => {

    app.get('/', function(req, res) {
        res.send("Hello World!");
    });

    app.post('/register', 
            AuthenticationControllerPolicy.register,
            AuthenticationController.register);

    app.post('/login', 
            AuthenticationControllerPolicy.login,
            AuthenticationController.login,);

    app.get('/user/:userId', 
            UserController.index);
}