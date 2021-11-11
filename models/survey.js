// File name: survey.js
// Author(s): Henry Suh (301004212)
// Date: Nov 11, 2021
let mongoose = require('mongoose');

// Create a model class
let surveySchema = mongoose.Schema(
    {
        Title: String,
        Owner: String,
        Questions: [],
        Choices: [[]]
    },
    {
        collection: "surveys"
    }
);

module.exports = mongoose.model('Book', surveySchema);