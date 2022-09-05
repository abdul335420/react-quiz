import * as React from 'react';
import {useEffect, useState } from 'react'

const AdminHome = () => {

  const [scoreBoard, setScoreBoard]=useState([]);

  const getData = async()=>{
    try {
      const response= await fetch("ttps://orcalotest-default-rtdb.firebaseio.com/scoreCard.json");
      
      let questionsArray=[]
      const data = await response.json();

      for(const key in data){
        questionsArray.push({
          id:key,
          
        })
      }
      setScoreBoard(questionsArray)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <div className="question-section text-center text-white">
        <div className="question-count py-5 ">
          <h1 className='float-right'>Quiz App</h1>
        </div>
        
      </div>

    </div>
  )
}

export default AdminHome