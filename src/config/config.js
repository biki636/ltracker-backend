module.exports = {
    port: process.env.PORT || 3000,

    db : {
        name : 'ltracker',
        username : 'ltracker',
        password : 'ltracker',
        options : {
            dialect : 'sqlite',
            host : 'localhost',
            storage : './db.sqlite'
        }
    }
};