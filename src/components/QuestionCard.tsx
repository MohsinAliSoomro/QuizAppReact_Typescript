import React from 'react';
import { QuestionPropsType } from './../Types/quizType'
export const QuestionCard: React.FC<QuestionPropsType> = ({ question, options, callback }) => {
    // console.log(question, options)

    return (
        <div>
            <h1>{question}</h1>
            <form onSubmit={callback}>
                {
                    options.map((item: string, ind: number) => {
                        return (
                            <label>
                                <input key={ind}
                                    type="radio"
                                    name="opt"
                                    value={item}
                                    onChange={(e)=>e.target.value}
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