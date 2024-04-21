import app from './app.js'
import { connectToDatabase } from './db/connections.js';

//connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase() 
.then(() =>{
app.listen("https://manish8472.github.io/ai-chatgpt/", () => console.log(""));
})
.catch((err) => console.log(err)) 