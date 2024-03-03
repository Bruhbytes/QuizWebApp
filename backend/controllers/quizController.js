const Quiz = require('../models/quizModel');

const getQuiz = async (req, res) => {
    try{
        const result = await Quiz.find({});
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({error: err});
    }
}

module.exports = {getQuiz};