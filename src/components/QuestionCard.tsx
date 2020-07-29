import React, { useState, FormEvent } from 'react';
import { QuestionPropsType } from './../Types/quizType';

export const QuestionCard: React.FC<QuestionPropsType> = ({ question, options, callback, enablebtn }) => {

    let [selectedAns, setSelectedAns] = useState('');
    const handleSelection = (e: any) => {
        setSelectedAns(e.target.value)
    }
    return (
        <div>
            <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >
                <p className="h5 p-3 bg-color">Question : {question}</p>
            </div>
            <form className="form" onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
                {
                    options.map((item: string, ind: number) => {
                        return (
                            <div
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                            >
                                <div key={ind} className="opt-container" >
                                    <div className="opt-radio">
                                        <input className="opt-radio-control" id="option"
                                            disabled={enablebtn}
                                            type="radio"
                                            name="opt"
                                            value={item}
                                            required
                                            checked={selectedAns === item}
                                            onChange={handleSelection}
                                        />
                                    </div>
                                    <div className="opt-lbl">
                                        <h5>{item}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <button disabled={enablebtn} className="opt-btn bg-color" >Submit</button>
            </form>
        </div>
    )
}