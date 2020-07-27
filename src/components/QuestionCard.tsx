import React, { useState, FormEvent } from 'react';
import { QuestionPropsType } from './../Types/quizType';


export const QuestionCard: React.FC<QuestionPropsType> = ({ question, options, callback,enablebtn }) => {

    let [selectedAns, setSelectedAns] = useState('');
    const handleSelection = (e: any) => {
        setSelectedAns(e.target.value)
    }
    return (
        <div className="text-center">
            <p className="bg-primary h3 p-3 ">{question}</p>
            <form className="form" onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
                {
                    options.map((item: string, ind: number) => {
                        return (
                            <div key={ind} className="form-group">
                                <input className="form-control" id="option"
                                    disabled={enablebtn}
                                    type="radio"
                                    name="opt"
                                    value={item}
                                    required
                                    checked={selectedAns === item}
                                    onChange={handleSelection}
                                />
                                <p className="h3">{item}</p>
                            </div>
                        )
                    })
                }
                <button disabled={enablebtn} className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}