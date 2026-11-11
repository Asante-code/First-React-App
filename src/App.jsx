import React from 'react'
import Student from "./Components/Student"


const App = () => {
  return (
    <div className='flex justify-center '>
      <Student name="William" age={25} course="ReactJS" level="beginner"/>
      <Student name="Michael" age={22} course="Python" level="Intermediate"/>
      <Student name="Grace" age={24} course="UI/UX Design" level="Advanced"/>
    </div>  )
}

export default App