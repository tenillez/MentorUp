import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from '../api/quizQuestions';
import Quiz from '../components/Matching/Quiz';
import GetMatch from '../components/Matching/GetMatch';
import "../components/Matching/Matching.css"
import axios from 'axios';
import { withUser } from '../services/withUser';

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      userAnswers: [],
      isMentor: '',
      answers: [],
      answersCount: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
      result: '',
      accountID: this.props.match.params.userID 
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    this.findUser();
  }
  findUser() {
    axios.get("/api/user/" + this.state.accountID).then((res) => {
      this.setState(res.data)
    });
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      answers: [],
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }
  
  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: (currentValue) => currentValue + 1 },
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer,
      answers: [...this.state.answers, answer]
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result });
    } else {
      this.setState({ result: 'not available at this time' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  storeResults() {
    let id = (this.props.user.id);
    let multichoice = (this.state.answers);
    
    console.log(multichoice);

    // our userAnswers
    axios.put("/api/user/" + id, {
      userAnswers: multichoice
    })
    .then(res => {
      console.log(res.data.userAnswers);
    })
    .catch(err => {
      console.log(err)
    });
  }

    renderResult() {
    this.storeResults();
    return (
      <GetMatch />
    );
  };

  render() {
    return (
      <div className="qContainer">
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default withUser(Questionnaire);