
const mongoose = require('mongoose');

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

const Issue = mongoose.model('Issue', issueSchema);
module.exports = Issue; 