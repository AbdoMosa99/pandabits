import dotenv = require('dotenv');

import app from './app';
import { dbConnect } from './utils/dbConnect';


const main = async () => {
    // Load env variables
    dotenv.config();

    await dbConnect();

    // Start server
    app.listen(process.env.PORT!, () => {
        console.info(`Listening on port ${process.env.PORT}`);
    });
}

main();
