const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let issueSchema = new mongoose.Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

let issue = mongoose.model('Issue', issueSchema);

module.exports = issue