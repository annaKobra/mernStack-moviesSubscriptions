import dotenv from 'dotenv';
dotenv.config();
// Require needed modules and initialize Express app
import express from 'express';
import cors from 'cors';
import './configs/database';
// Controllers
import movieController from './movies/movieController';
import memberController from './members/memberController';
import subscriptionController from './subscriptions/subscriptionController';
import userController from './users/userController';

const app = express();

// Set cors and express/bodyParser middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/movies', movieController);
app.use('/api/members', memberController);
app.use('/api/subscriptions', subscriptionController);
app.use('/api/users', userController);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/api`));