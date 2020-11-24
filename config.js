module.exports = {
    PORT: process.env.PORT || 5000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_NAME: process.env.DB_NAME || 'node_practice',
    SECRET: process.env.SECRET || 'superrandom123secret.',

    post: {
        PORT: process.env.PORT || 5002
    }
}