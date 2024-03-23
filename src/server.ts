import express = require('express');
import dotenv = require('dotenv');
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';


dotenv.config();
mongoose.connect('mongodb://127.0.0.1:27017/pandabits');
const app = express();

app.get('/', (req, res) => {
    res
        .status(StatusCodes.OK)
        .json({ message: `Hello, ${req.query.name || 'World'}!`});
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
