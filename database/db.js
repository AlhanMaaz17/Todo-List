import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-yjrkgyd-shard-00-00.fhpyhqh.mongodb.net:27017,ac-yjrkgyd-shard-00-01.fhpyhqh.mongodb.net:27017,ac-yjrkgyd-shard-00-02.fhpyhqh.mongodb.net:27017/?ssl=true&replicaSet=atlas-3g932e-shard-0&authSource=admin&retryWrites=true&w=majority`;

   
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database');
    })
}

export default Connection;


// `mongodb://${USERNAME}:${PASSWORD}@ac-hphkfqv-shard-00-00.bmuzxat.mongodb.net:27017,ac-hphkfqv-shard-00-01.bmuzxat.mongodb.net:27017,ac-hphkfqv-shard-00-02.bmuzxat.mongodb.net:27017/?ssl=true&replicaSet=atlas-ifygh4-shard-0&authSource=admin&retryWrites=true&w=majority`

