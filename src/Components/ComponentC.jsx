import '../Components/ComponentStyles/ComponentA.css'
import ComponentD from './ComponentD'
import React, {useState, useContext,createContext} from 'react'
import {TestContext} from './ComponentA'

function ComponentC (){
  const user = useContext(TestContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Well hello again ${user}`}</h2>
      <ComponentD/>
    </div>
  )
}

export default ComponentC