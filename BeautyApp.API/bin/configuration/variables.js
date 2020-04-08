const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {

        connection: process.env.connection || 'mongodb+srv://nofoodadmin:sapientia123@cluster0-k2kw0.mongodb.net/test?retryWrites=true&w=majority'
    },
    Security:{
        secretKey: 'd41d8cd98f00b204e9800998ecf8427e|98d7da2a7993d1aa25ee61410710f16c'
    }
}
module.exports = variables;