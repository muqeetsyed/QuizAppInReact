import './App.css';
import RadioInputType from './Component/RadioInputType';
import React, { useState, useEffect } from 'react';

function App() {
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [question, setQuestion] = useState("");
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  let quiz = [{
    'Question' : 'Which language runs in a web browser?',
     'a' : 'Java',
     'b' :  'Php',
     'c' : 'JavaScript',
     'd' : 'C',
     'Result' : 'c'
  },{
      'Question' : 'What does CSS stand for?',
      'a' : 'Central Style Sheets',
      'b' :  'Cascading Style Sheets',
      'c' : 'Cascading Simple Sheets',
      'd' : 'Cars SUVs Sailboats',
      'Result' : 'b'
  },{
      'Question' : 'What year was JavaScript launched?',
      'a' : '1992',
      'b' :  '1994',
      'c' : '1996',
      'd' : '1995',
      'Result' : 'd'
  }];


function loadQuiz(){
  const currentQuizData  = quiz[currentQuiz];
  setQuestion(currentQuizData['Question']);
  setOptionA(currentQuizData.a);
  setOptionB(currentQuizData.b);
  setOptionC(currentQuizData.c);
  setOptionD(currentQuizData.d);
}

  useEffect(()=>{
    if(currentQuiz < quiz.length )
    loadQuiz()
  });


  function setSelectedAnswer(e){
      if(quiz[currentQuiz]?.Result === e.target.id){
        setScore(score + 1);
      }
  }

 
  function handleNextQuestion()
  {
      setCurrentQuiz(currentQuiz + 1);
      
      if(currentQuiz < quiz.length ){
        loadQuiz();
      }else{
        setShowScore(true);
      }
  }


  return (
    <>
    {showScore ? <div>You score {score} out of  { quiz.length} </div> : 
    <div className="App">
      <p id="question">{question}</p>
      <div id = 'options'>
          <ul>
            <li>
               <RadioInputType option_id="a" lable_id="a" value={optionA} onClick={setSelectedAnswer}></RadioInputType>
            </li>
            <li>
              <RadioInputType option_id="b" lable_id="b" value={optionB} onClick={setSelectedAnswer}></RadioInputType>
            </li>
            <li>
              <RadioInputType option_id="c" lable_id="c" value={optionC} onClick={setSelectedAnswer}></RadioInputType>
            </li>
            <li>
              <RadioInputType option_id="d" lable_id="d" value={optionD} onClick={setSelectedAnswer}></RadioInputType>
            </li>
          </ul>
      </div>
      <button id="submit" onClick={handleNextQuestion}>Next</button>
    </div>
    }
    </>
  );
}

export default App;
