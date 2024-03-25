import '../Components/ComponentStyles/ComponentA.css'
import ComponentB from './ComponentB'
import React, {useState, createContext} from 'react'

export const TestContext = createContext();

function ComponentA (){

  const [user, setUser] = useState ("Test1")

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <TestContext.Provider value={user}>
        <ComponentB user= {user}/>
      </TestContext.Provider>
      
    </div>
  )
}

export default ComponentA