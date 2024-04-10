const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const Property = require("./models/product.model.js");

app.use(express.json(),cors()); // Corrected

app.post("/api/property", async (request, response) => {
  // console.log(request.body);
  // response.send(request.body);
  // response.send("Data is received...")
  try {
    const property = await Property.create(request.body);
    response.status(200).json(property);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
app.post("/api/properties", async (request, response) => {
  // console.log(request.body);
  // response.send(request.body);
  // response.send("Data is received...")
  try {
    const properties=await Property.create(request.body)
    response.status(200).json(properties);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
});

app.get("/api/properties",async(request,response)=>{
  try {
    const properties=await Property.find({})
    response.status(200).json(properties);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
})

app.get("/api/properties/:id",async(request,response)=>{
  try {
    const { id }=request.params
    const property=await Property.findById(id)
    response.status(200).json(property);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
})

mongoose
  .connect(
    "mongodb+srv://parekhkathan5:Mmr6sA092TxoKrdM@mynewdatabase.chenzu3.mongodb.net/?retryWrites=true&w=majority&appName=MyNewDatabase"
  )
  .then(() => {
    console.log("Connected to MongoDB database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000...");
      app.get("/", (request, response) => {
        response.send("Hello from Node.js api SERVER...");
      }); 
    });
  })
  .catch(() => console.log("Error"));
