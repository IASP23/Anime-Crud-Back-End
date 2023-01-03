import {RequestHandler} from 'express'; 
import anime from '../models/anime';
import AnimeModel from '../models/anime'


export const createAnime : RequestHandler = async (req , res) => {  
  const anime = new AnimeModel(req.body);
  const saveAnime = await anime.save(); 
  res.json(saveAnime); 
}

export const getAnimes : RequestHandler = async (req , res) => {
  const animeList = await AnimeModel.find();
  res.json(animeList); 
 
}

export const getAnime : RequestHandler = async (req , res) => {
  const animeFound = await AnimeModel.findById(req.params.id); 
  if (!animeFound) {
    return res.status(204).json();
  }else {
  return res.json(animeFound);  
  }
}


export const deleteAnime : RequestHandler = async (req , res) => {
  const animeFound = await AnimeModel.findByIdAndDelete(req.params.id); 
  if (!animeFound) {
    return res.status(204).json();
  } else {
  res.json('Anime Deleted'); 
  }
}
export const updateAnime : RequestHandler = async (req , res) => {
  const animeUpdate =  await AnimeModel.findByIdAndUpdate(req.params.id , req.body  , {new : true}); 
  if (!animeUpdate) {
    return res.status(204).json();
  } else {
  res.json(animeUpdate);}
   
}
