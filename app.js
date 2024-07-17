import express from 'express';
import dotenv from 'dotenv';

import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started in ${PORT} port`);
});
