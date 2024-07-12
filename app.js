import express from 'express';
import bodyParser from 'body-parser'
import morganBody from 'morgan-body';
import dotenv from 'dotenv'; 
import cors from 'cors'; 

import authRoutes from './routes/authRoutes.js'; 

dotenv.config({ path: './.env' });

console.log(process.env);
const PORT = process.env.PORT

const app = express();

//middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

// logger 
morganBody(app); 

//routes 
app.use('/api/auth/', authRoutes);

app.listen(PORT, () => {
    console.log("Server started on port: 8080");
})