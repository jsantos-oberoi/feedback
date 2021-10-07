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

    const rubric = new Rubric(request.body.rubric);
});

server.get("/rubric", (request, response) => {
    const rubric = {
          "label": "new rubric",
          "criteria": [
            {
              "bandLabels": ["1 - 2", "3 - 4", "5 - 6", "7 - 8"],
              "label": "criteria a",
              "strands": [
                {
                  "objective": "a-i",
                  "bands": [
                    "a-i-1",
                    "a-i-2",
                    "a-i-3",
                    "a-i-4"
                  ]
                },
                {
                  "objective": "a-ii",
                  "bands": [
                    "a-ii-1",
                    "a-ii-2",
                    "a-ii-3",
                    "a-ii-4"
                  ]
                },
                {
                  "objective": "a-iii",
                  "bands": [
                    "a-iii-1",
                    "a-iii-2",
                    "a-iii-3",
                    "a-iii-4"
                  ]
                },
                {
                  "objective": [
                    "a-iv",
                    ""
                  ],
                  "bands": [
                    "a-iv-1",
                    "a-iv-2",
                    "a-iv-3",
                    "a-iv-4"
                  ]
                }
              ]
            },
            {
              "bandLabels": ["1 - 2", "3 - 4", "5 - 6", "7 - 8"],
              "label": "criteria b",
              "strands": [
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                }
              ]
            },
            {
              "bandLabels": ["1 - 2", "3 - 4", "5 - 6", "7 - 8"],
              "label": "criteria c",
              "strands": [
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                }
              ]
            },
            {
              "bandLabels": ["1 - 2", "3 - 4", "5 - 6", "7 - 8"],
              "label": "criteria d",
              "strands": [
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                {
                  "objective": "",
                  "bands": [
                    "",
                    "",
                    "",
                    ""
                  ]
                }
              ]
            }
          ]
        };
    response.render("rubric-form", {rubric: rubric});
});

server.listen(port, () => {
    console.log(`Listening on Port ${port}.`);
});
