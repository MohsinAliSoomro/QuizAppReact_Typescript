import React, { useEffect, useState } from 'react';
import './App.css';
import { getApi } from './service/quizService';
import { questionType } from './Types/quizType'
import { QuestionCard } from './components/QuestionCard'

function App() {

  const [quizdata, setQuizData] = useState<questionType[]>([]);

  const [currentState, setCurrentState] = useState(0);

  const [score, SetScore] = useState(0)

  useEffect(() => {
    async function getDetailsAPI() {
      const quizDetails = await getApi(10, 'easy');
      setQuizData(quizDetails)
      console.log(quizDetails);
    }
    getDetailsAPI()
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const currentQuestion: questionType = quizdata[currentState];
    if (userAns === currentQuestion.answer) {
      SetScore(1 + score)
    }
    if (currentState !== quizdata.length - 1)
      setCurrentState(1 + currentState)
    else {
      alert("Your Score is " + score + " out of " + quizdata.length)
      SetScore(0)
      setCurrentState(0)
    }
  }

  if (!quizdata.length)
    return (<h1>loading...</h1>)
  return (
    <div className="App">
      <h1>Score : {score}</h1>
      <QuestionCard
        options={quizdata[currentState].options}
        question={quizdata[currentState].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
