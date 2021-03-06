/**
 * MongoDB Database connection info
 * @type {{url: string}}
 */
module.exports = {
    'options' : {
        db: { native_parser: true },
        server: {
            poolSize: 5,
            socketOptions: {
                keepAlive : 1
            }
        },
        replset: {
            rs_name: 'localhost',
            socketOptions: {
                keepAlive : 1
            }

        },
        user: 'crp_admin',
        password: 'crp123'
    },
    'uri': 'mongodb://localhost/crp_db'
};