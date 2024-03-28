import express = require('express');

import router from './routes';
import { errorHandler } from './middleware/errorHandler.middleware';


const app = express();

// Middlewares
app.use(express.json());  // serialize body
app.use(errorHandler);

// Our API
app.use("/api/v1", router);

export default app;
