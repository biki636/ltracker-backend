module.exports = (sequlize, DataTypes ) => {

    const User = sequlize.define('User', {
        username : {
            type : DataTypes.STRING,
            unique : true,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        firstname : {
            type : DataTypes.STRING,
            allowNull: false
        },
        lastname : {
            type : DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
};