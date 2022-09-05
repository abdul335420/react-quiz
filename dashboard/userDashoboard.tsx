import * as React from 'react';
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Button,Box } from "@mui/material";
// import './home.css'
const UserHome = () => {
  const [questions, setQuestions]=useState<any>()
  const [questionList, setQuestionList]=useState<any>([])
  const[currentQuestion, setCurrentQuestion] = useState(0)
  const[userScore, setScore]= useState(0);

  const getData = useCallback(async()=>{
    try {
      const response:any= await fetch("https://orcalotest-default-rtdb.firebaseio.com/quizAppQuestions.json");
      
      let questionsArray=[]
      const data = await response.json();
      setQuestions(data)
      for(const key in data){
        questionsArray.push({
          id:key,
          question: data[key].question,
          options: data[key].options,
          correctOption: data[key].correctOption
        })
      }
      setQuestionList(questionsArray)
    } catch (error) {
      // console.log(error);
    }
  },[])
  
  useEffect(()=>{
    getData()
  },[])
  // console.log(questionList.question)
  console.log(questionList);
  const handleChange=(e)=>{ 
    for(const quiz of questionList){
      if(e.target.value === quiz.correctOption){
        setScore(prev=> prev+1)
      }
    }

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   
  }

  return (
    <div>
      <div className="question-section text-center text-white">
        <div className="question-count py-5 ">
          <h1 className='float-right'>Quiz App</h1>
          <h2>Question {currentQuestion + 1} of {questionList.length}</h2>
          <h3 style={{float:"right",color:'red'}}>{userScore}</h3>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="questions container">
              {questionList.map((quiz,i)=>{
                return (
                <div>
                  <h3>{i+1}: {quiz.question}</h3>
                    {quiz.options.map((o,index)=>{
                    return(
                      <div className="form-check ms-2 me-5" key={index}>
                          <input
                            className="form-check-input"
                            onChange={handleChange}
                            value={o}
                            type="radio"
                            name={i}
                          />
                          <label className="form-check-label">
                            {o}
                          </label>
                        </div>
                    )
                  })}
                {/* })} */}
                </div>
                )
              })}

            </div>
          <Button sx={{float:'right'}} type="submit">Next</Button>
        </form>
      </div>

    </div>
  )
}

export default UserHome
