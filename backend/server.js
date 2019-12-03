const express = require('express')
const cors = require('cors')
const bodyParser = require('body-Parser')
const mongoose = require('mongoose')
const Issue = require('./models/issues')

const app = express();
//app.get('/',(req, res) => res.send('Hello Express!'));
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dbuser:password1!@cluster0-09kjc.mongodb.net/test?retryWrites=true&w=majority');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Connected to the mongoose!");
});

router.route('/test/issues').get((req, res) => {
    Issue.find((err, Issue) => {
        if (err)
            console.log(err);
        else
            res.json(Issue);
    });
});

router.route('/test/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, Issue) => {
        if (err)
            console.log(err);

        else
            res.json(Issue);
    });
});

router.route('/test/issues/add').post ((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added Issue!'});
        })
        .catch(err => {
            res.status(400).send('Failed to Add Issue!');
        });
});

router.route('/test/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
            issue.title = req.body.title;
            issue.resposible = req.body.resposible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(Issue => {
                res.json('Update Done');
            }).catch(err => {
                res.status(400).send('Update Failed');
            });
        }
    });
});

router.route('/test/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, Issue) => {
        if(err)
            res.json(err);
        else
            res.json('Removed Successfuly!');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Hello Express Server!'));

module.exports = router;
