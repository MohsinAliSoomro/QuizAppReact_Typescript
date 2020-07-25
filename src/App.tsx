import React, { useEffect, useState } from 'react';
import './App.css';
import { getApi } from './service/quizService';
import { questionType } from './Types/quizType'
import { QuestionCard } from './components/QuestionCard'

function App() {

  const [quizdata, setQuizData] = useState<questionType[]>([]);

  const [currentState, setCurrentState] = useState(0);

  const message = <h1>Complete Quiz</h1>;

  useEffect(() => {
    async function getDetailsAPI() {
      const quizDetails = await getApi(10, 'easy');
      setQuizData(quizDetails)
      console.log(quizDetails);
    }
    getDetailsAPI()
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (currentState !== quizdata.length - 1)
        setCurrentState(1 + currentState)
    else return message
  }

  if (!quizdata.length)
    return (<h1>loading...</h1>)
  return (
    <div className="App">
      {message}
      {/* <h1>SCORE : {score}</h1> */}
      <QuestionCard
        options={quizdata[currentState].options}
        question={quizdata[currentState].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
