import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Team from './Team'
import styled from 'styled-components'
import Form from './Form'

const teamList = [
  {name: 'Sora', email: 'sora@kh.com', role:   'Light'},
  {name:'Riku', email: 'riku@kh.com', role:    'Light'},
  {name: 'Kairi', email: 'kairi@kh.com', role: 'Light'},
  {name: 'Xehanort', email: 'xehanort@kh.com', role: 'Darkness'},
]

function App() {

  const [team, setTeam] = useState(teamList)
  
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form />
      <div className= 'teamCard'>
        {team.map((data)=>{
          return (<Team team ={data} />)
          })
        }
      </div>
      
    </div>
  );
}

export default App;
