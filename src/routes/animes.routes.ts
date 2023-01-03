import {Router} from 'express'
import { getAnime , getAnimes , createAnime  , updateAnime , deleteAnime }
     from '../controllers/animes.controller'; 
 
const router = Router();

 router.get("/animes", getAnimes);

router.get("/animes/:id", getAnime);
  
router.post("/animes", createAnime);

router.delete("/animes/:id", deleteAnime);

router.put("/animes/:id", updateAnime); 


export default router