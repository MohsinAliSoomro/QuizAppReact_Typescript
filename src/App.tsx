import React, { useEffect, useState } from 'react';
import 'bootstrap-4-react/dist/bootstrap-4-react';
import './App.css'
import { getApi } from './service/quizService';
import { questionType } from './Types/quizType'
import { QuestionCard } from './components/QuestionCard'

function App() {

  const [quizdata, setQuizData] = useState<questionType[]>([]);

  const [currentState, setCurrentState] = useState(1);

  const [score, SetScore] = useState(0)

  const [gameover, setGameover] = useState('Start Game');

  const [enablebtn, setEnablebtn] = useState(false)

  const [submitBtn, setSubmitBtn] = useState(true);

  useEffect(() => {
    async function getDetailsAPI() {
      const quizDetails = await getApi(11, 'easy');
      setQuizData(quizDetails)
    }
    getDetailsAPI()
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    setEnablebtn(true);
    const currentQuestion: questionType = quizdata[currentState];
    if (userAns === currentQuestion.answer) {
      SetScore(1 + score)
    }
    if (currentState !== quizdata.length - 1)
      setCurrentState(1 + currentState)
    else {
      setGameover('Game Complete')
      setEnablebtn(false)
      setSubmitBtn(true)
    }
  }

  const handleStart = () => {
    SetScore(0)
    setCurrentState(1)
    setEnablebtn(true)
    setSubmitBtn(false)
    setGameover('In Pregress')
  }

  if (!quizdata.length)
    return (<h1>loading...</h1>)
  return (
    <div className="back">
      <div className="container text-white">
        <div className="row">
          <div className="col text-center">
            <p className="display-4">Quiz App</p>
          </div>
        </div>
        <div className="row mb-2 text-center">
          <div className="col">
            <p className="h4">Score : {score} QNo : {currentState}</p>
          </div>
          <div className="col">
            <p className="h4">Game : {gameover}</p>
          </div>
          <div className="col">
            <button className="btn btn-primary" disabled={enablebtn} onClick={handleStart}>Start Game</button>
          </div>



        </div>
        <QuestionCard
          options={quizdata[currentState].options}
          question={quizdata[currentState].question}
          callback={handleSubmit}
          enablebtn={submitBtn}
        />
      </div>
      <p className="text-white">Developer Mohsin Ali Soomro</p>
    </div>
  );
}

export default App;
