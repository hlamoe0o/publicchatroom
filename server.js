import express from "express";

// => Express server setup 

const exapp = express();

exapp.use(express.static('dist')); // Server static files from the public folder

// Start the Express server 

exapp.listen(8000,()=>{
    console.log("Server is running on http://localhost:8000");
});