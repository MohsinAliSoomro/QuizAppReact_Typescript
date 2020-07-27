import React, { useState, FormEvent } from 'react';
import { QuestionPropsType } from './../Types/quizType'
export const QuestionCard: React.FC<QuestionPropsType> = ({ question, options, callback }) => {
    
    let [selectedAns,setSelectedAns]=useState('');
    const handleSelection =(e:any)=>{
        setSelectedAns(e.target.value)
    }
    return (
        <div>
            <h1>{question}</h1>
            <form onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
                {
                    options.map((item: string, ind: number) => {
                        return (
                            <label key={ind}>
                                <input 
                                    type="radio"
                                    name="opt"
                                    value={item}
                                    required
                                    checked={selectedAns===item}
                                    onChange={handleSelection}
                                />
                                {item}
                            </label>
                        )
                    })
                }
                <input type="submit" />
            </form>
        </div>
    )
}