import * as React from 'react';
import {useEffect, useState } from 'react'

const UserHome = () => {

  const [questionList, setQuestionList]=useState([])
  const[currentQuestion, setCurrentQuestion] = useState(0)
  const[userScore, setScore]= useState(0);

  const getData = async()=>{
    try {
      const response= await fetch("https://orcalotest-default-rtdb.firebaseio.com/quizAppQuestions.json");
      
      let questionsArray=[]
      const data = await response.json();

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
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getData()
  },[])
console.log(questionList[currentQuestion])
  const handleChange=(e)=>{ 
    for(const quiz of questionList){
      if(e.target.value === quiz.correctOption && userScore<questionList.length){
        setScore(prev=> prev+1)
      }
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    // for(const quiz of questionList){
    //   if( e === quiz.correctOption){
    //     setScore(prev=> prev+1)
    //   }
    // }
    setCurrentQuestion(prev=>prev+1)
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
                            name={i.toString()}
                          />
                          <label className="form-check-label">
                            {o}
                          </label>
                        </div>
                    )
                  })}
                </div>
                )
              })}
              <button style={{float:'right',}} type="submit">Next</button>
            </div>
        </form>
      </div>

    </div>
  )
}

export default UserHome