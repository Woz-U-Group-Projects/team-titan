const mongoose = require('mongoose');


let issueSchema = new mongoose.Schema({
    
    _id: { 
        type: String
    },
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

module.exports = issue;