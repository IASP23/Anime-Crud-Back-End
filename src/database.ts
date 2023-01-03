import mongoose from "mongoose";
import { DATABASE } from "./config";

( async () => {
  try {
    const db =  await mongoose.connect(`mongodb://localhost/${DATABASE}`);
    console.log("Database is connected to: "  , db.connection.name);
  
  } catch (error) {
    console.error(error); 
  }
 })()