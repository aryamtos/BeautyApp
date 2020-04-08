const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {

        connection: process.env.connection || 'mongodb+srv://nofoodadmin:sapientia123@cluster0-k2kw0.mongodb.net/test?retryWrites=true&w=majority'
    }
}
module.exports = variables;