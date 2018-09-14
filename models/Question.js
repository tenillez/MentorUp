var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Answer = require('./answer');

var questionSchema = new Schema({
  mentorQuestionnaire: { type: String, ref: 'Questionnaire' },
  number: Number,
  text: String,
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
}, { timestamps: { createdAt: 'created_at' } });


var Question = mongoose.model("question", questionSchema, "Question");

module.exports = Question;