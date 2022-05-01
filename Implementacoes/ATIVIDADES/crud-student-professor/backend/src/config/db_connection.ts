import {Sequelize} from 'sequelize'
import env from 'dotenv'
env.config()

const connection = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})

export default connection