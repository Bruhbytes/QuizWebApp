const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

const quizSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    options:{
        type: [String],
        required: true,
    },
    correct: {
        type: String,
        required: true
    }
});

const Quiz = mongoose.model('Quiz', quizSchema)

app.post('/create', async (req, res) => {
    const {question, options,correct} = req.body;

    const newQuestion = new Quiz({
        question,
        options,
        correct
    });

    await newQuestion.save()
    .then(() => {
        res.status(200).json({msg: "Successfully inserted", newQuestion});        
    })
    .catch(err => {
        res.status(500).json({error: "Internal server error"});
        console.log(err);
    });

})

app.get('/getQuestion', async (req, res) => {
    try {
        const result = await Quiz.find({});    
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json({"error":error});
    }
})

try{
    mongoose.connect("mongodb://127.0.0.1:27017/quizDB")
    .then(() => console.log("Database connected") )
    app.listen(4000, (req, res) => {
        console.log("Server started on port 4000");
    })
}
catch (err){
    console.log(err);
}

