const express = require('express');
const server = express();
const port = 3000;

server.use(express.urlencoded({extended: true}));
server.use(express.static(__dirname + "/public"));

server.set("view engine", "ejs");

// MODELS
//const Course = require('./models/course.js');
const Rubric = require('./models/rubric.js');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jsantos:jsantos@cluster0.jnhfv.mongodb.net/ia-sample?retryWrites=true&w=majority")
         .then((result) => {
             console.log("Connected to MongoDB Atlas.");
         })
         .catch((error) => {
             console.log(error);
         });

server.get("/", (request, response) => {
    console.log("Request received.");
    response.send("Received");
});

server.post("/rubric/update", (request, response) => {
    console.log("Post request received.");
    response.send(request.body);
});

server.get("/rubric/update/:rubricID", (request, response) => {
    Rubric.findById(request.params.rubricID)
      .then((response) => {
        const rubric = response;
        response.render("rubric-form", {rubric: rubric});
      })
      .catch((error) => {
        // Define rubric defaults:
        const rubric = {
          label: "new rubric",
          criteria: [
            { bandLabels: ["1 - 2", "3 - 4", "5 - 6", "7 - 8"], label: "Criterion A", strands: [{ objective: "", bands: ["", "", "", ""] }] },
            { bandLabels: ["1 - 2", "3 - 4", "5 - 6", "7 - 8"], label: "Criterion B", strands: [{ objective: "", bands: ["", "", "", ""] }] },
            { bandLabels: ["1 - 2", "3 - 4", "5 - 6", "7 - 8"], label: "Criterion C", strands: [{ objective: "", bands: ["", "", "", ""] }] },
            { bandLabels: ["1 - 2", "3 - 4", "5 - 6", "7 - 8"], label: "Criterion D", strands: [{ objective: "", bands: ["", "", "", ""] }] }
          ]
        }
        response.render("rubric-form", {rubric: rubric});
      });
});

server.listen(port, () => {
    console.log(`Listening on Port ${port}.`);
});
