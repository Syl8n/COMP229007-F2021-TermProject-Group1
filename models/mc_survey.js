// File name: mc_survey.js
// Author(s): Henry Suh (301004212)
// Date: Nov 11, 2021

let mongoose = require('mongoose');

// Create a model class
let mc_surveySchema = mongoose.Schema(
    {
        Title: {
            type: String,
            unique: true,
            required: true,
        },
        UserID: String,
        Questions: {
            type: [String],
            required: true,
        },
        Choices: [[]]
    },
    {
        collection: "mc_survey"
    }
);

module.exports = mongoose.model('Book', mc_surveySchema);