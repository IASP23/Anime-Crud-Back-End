import animeRoutes from '../src/routes/animes.routes'
import express from "express";
import cors from 'cors'

const app = express();

app.set ('port' , process.env.PORT || 4000);  

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:false})) //Entender los datos que vienen desde un formulario 

app.use(animeRoutes)

export default app;