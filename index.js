import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT =process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL =process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-yjrkgyd-shard-00-00.fhpyhqh.mongodb.net:27017,ac-yjrkgyd-shard-00-01.fhpyhqh.mongodb.net:27017,ac-yjrkgyd-shard-00-02.fhpyhqh.mongodb.net:27017/?ssl=true&replicaSet=atlas-3g932e-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));