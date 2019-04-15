import React, { Component } from 'react';
var firebase = require('firebase/app');
var uuid=require('uuid');

var config = {
    apiKey: "AIzaSyD146VAoshfAtIVazCltNUlQe_FY5bHCF8",
    authDomain: "usurvey-821ba.firebaseapp.com",
    databaseURL: "https://usurvey-821ba.firebaseio.com",
    projectId: "usurvey-821ba",
    storageBucket: "usurvey-821ba.appspot.com",
    messagingSenderId: "299207963862"
  };
  firebase.initializeApp(config);

class Usurvey extends Component{

nameSubmit(event){
  var student=this.refs.name.value;
  this.setState({studentName: student},function(){
    console.log(this.state);
  });
}


submittedAnswer(event){
  var answers=this.state.answers;

if(event.target.name === 'ans1'){
  answers.ans1=event.target.value;
}else if(event.target.name === 'ans2'){
  answers.ans2=event.target.value;
}else if(event.target.name === 'ans3'){
  answers.ans3=event.target.value;
}

this.setState({answers: answers}, function(){
  console.log(this.state);
});
}


questionSubmit(){
  // firebase.database().ref('usurvey-821ba/'+ this.state.uid).set({
  //   studentName: this.state.studentName ,
  //   answers: this.state.answers
  // });
  this.setState( {isSubmitted: true} );
}

  constructor(props){
    super(props);

    this.state ={
      uid: uuid.v1(),
      studentName: '',
      answers: {
        ans1: '',
        ans2: '',
        ans3: '',
      },
      isSubmitted: false
    };
    this.nameSubmit=this.nameSubmit.bind(this);
    this.submittedAnswer=this.submittedAnswer.bind(this);
    this.questionSubmit=this.questionSubmit.bind(this);
  }

  render(){
    var studentName;
    var questions;

    if(this.state.studentName==='' && this.state.isSubmitted===false){
      studentName= <div>
      <h2> HEY PLEASE ENTER YOUR NAME.</h2>
        <form onSubmit={this.nameSubmit}>
        <input type="text" placeholder="Enter name" ref="name" />
        </form>
      </div>;
        questions= ''
    }else if(this.state.studentName!=='' && this.state.isSubmitted===false){
      studentName= <h1>Welcome to Usurvey App, {this.state.studentName} </h1>
      questions=<div>
        <h2>Here Are Some Questions:</h2>
        <form onSubmit={this.questionSubmit}>
          <div className="card">
            <label> WHAT TYPE OF COURSES DO YOU LIKE THE MOST?</label><br /><br />
            <input type="radio" name="ans1" value="Technology" onChange={this.submittedAnswer} /> Technology
            <input type="radio" name="ans1" value="Designing" onChange={this.submittedAnswer} /> Designing
            <input type="radio" name="ans1" value="Marketing" onChange={this.submittedAnswer} /> Marketing
          </div><br />

          <div className="card">
            <label> YOU ARE A :</label><br /><br />
            <input type="radio" name="ans2" value="Student" onChange={this.submittedAnswer} /> Student
            <input type="radio" name="ans2" value="In-Job" onChange={this.submittedAnswer} /> In-Job
            <input type="radio" name="ans2" value="Looking-Job" onChange={this.submittedAnswer} /> Looking-Job
          </div><br />

          <div className="card">
            <label> Online Learning Is Helpful?</label><br /><br />
            <input type="radio" name="ans3" value="Yes" onChange={this.submittedAnswer} /> Yes
            <input type="radio" name="ans3" value="No" onChange={this.submittedAnswer} /> No
            <input type="radio" name="ans3" value="May-be" onChange={this.submittedAnswer} /> May-be
          </div>
          <input className="feedback-button" type="submit" value="submit" />
        </form>
      </div>
    }else if(this.state.isSubmitted===true){
      studentName=<h1> Thanks, {this.state.studentName}.</h1>
    }

    return(
      <div>
          {studentName}
          ---------------------------------
          {questions}
      </div>
    );
  }
}

export default Usurvey;
