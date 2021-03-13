import React, { useState } from 'react'
import './App.css';
import Team from './Team'
import Form from './Form'

const teamList = [
  {name: 'Sora', email: 'sora@kh.com', role:   'Light'},
  {name:'Riku', email: 'riku@kh.com', role:    'Light'},
  {name: 'Kairi', email: 'kairi@kh.com', role: 'Light'},
  {name: 'Xehanort', email: 'xehanort@kh.com', role: 'Darkness'},
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [team, setTeam] = useState(teamList)

  const [formValues, setForms] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setForms({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeam([...team, newTeam])
    setForms(initialFormValues)
    console.log(newTeam)
  }
  
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
         />
      <div className= 'teamCard'>
        {team.map((data, i)=>{
          return (<Team key={i} team ={data} />)
          })
        }
      </div>
      
    </div>
  );
}

export default App;
