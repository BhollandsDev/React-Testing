import '../Components/ComponentStyles/ComponentA.css'
import React, {useState, useContext,createContext} from 'react'
import {TestContext} from './ComponentA'


function ComponentD (){
  const user = useContext(TestContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
      
    </div>
  )
}

export default ComponentD