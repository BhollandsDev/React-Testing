import Student from "./Students"
function App() {
  
return(
  <>
    <Student name="student 1" age={50} isStudent={true}/>
    <Student name="student 2" age={42} isStudent={false}/>
    <Student name="student 3" age={50} isStudent={false}/>
    <Student name="student 4" age={27} isStudent={true}/>
  </>
)
   
}

export default App
