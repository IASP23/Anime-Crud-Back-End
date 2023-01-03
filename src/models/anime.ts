import {Schema , model} from 'mongoose'

const animeSchema = new Schema ({
    title : {
        type : String , 
        trim : true //Quita espacios en blanco al inicio en caso de ser detectados
    }, 
    author : {
        type : String , 
        trim : true 
    },
    publicationDate : {
        type : String , 
        trim : true 
    }, 
    description  : {
        type : String , 
        trim : true 
    }, 
    frontPage : {
        type : String , 
        trim : true 
    }

}, {
    versionKey : false // Quita el version de Mongoose 
})

export default model ('Anime' , animeSchema) 