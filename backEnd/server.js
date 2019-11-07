const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Issue = require('./models/issue')


const app = express();
//app.get('/',(req, res) => res.send('Hello Express!'));
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dbuser:password1!@cluster0-09kjc.mongodb.net/test/issues');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Connected to the mongoose!");
});

router.route('/issues').get((req, res) => {
    Issue.find((err, Issues) => {
        if (err)
            console.log(err);
        else
            res.json(Issues);
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, Issue) => {
        if (err)
            console.log(err);

        else
            res.json(Issue);
    });
});

router.route('/issues/add').post ((req, res) => {
    let Issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added Issue!'});
        })
        .catch(err => {
            res.status(400).send('Failed to Add Issue!');
        });
});

router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
            issue.title = req.body.title;
            issue.resposible = req.body.resposible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update Done');
            }).catch(err => {
                res.status(400).send('Update Failed');
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if(err)
            res.json(err);
        else
            res.json('Removed Successfuly!');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Hello Express Server!'));