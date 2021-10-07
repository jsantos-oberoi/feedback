const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RubricSchema = new Schema({
    label: {type: String, required: true},
    criteria: [
        {
            label: {type: String, required: true},
            bandLabels: [ String ],
            strands: [
                {
                    objective: {type: String, required: true},
                    bands: [ String ]
                }
            ]
        }
    ]
});

const Rubric = mongoose.model("Rubric", RubricSchema);

module.exports = Rubric;