import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import placeRoutes from './routes/places.js'
const PORT = 8080;
const app = express();

dotenv.config();

app.use(cors())
app.use(express.json());

app.use('/api/v1/places', placeRoutes);





app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})