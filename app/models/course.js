const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    label: { type: String, required: true},
    description: { type: String },
    year: { type: Number },
    rubrics: [ ObjectId ],
    students: [ ObjectId ],
    assignments: [ String ]
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;