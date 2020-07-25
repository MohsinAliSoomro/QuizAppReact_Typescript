import { Quiz, questionType } from './../Types/quizType';


export const getApi = async (amount: number, level: string): Promise<questionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&deficuilty=${level}&type=multiple`)
    const { results } = await res.json();
    const quiz: questionType[] = results.map((ObjQuestion: Quiz) => {
        return {
            question: ObjQuestion.question,
            answer: ObjQuestion.correct_answer,
            options: ObjQuestion.incorrect_answers.concat(ObjQuestion.correct_answer).sort(()=>Math.random()-0.5)
        }
    })
    return quiz;
}