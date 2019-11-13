import React,{useState} from 'react';
import './App.css';
import Team from './components/Team';
import TeamForm from './components/TeamBuilderForm'

function App() {
  const [teams, setTeams] = useState([
    {
      id: 0,
      name: 'Aaron Doran',
      email: 'aarondoran.freelancing@gmail.com',
      position: 'Front end Developer'
    }
  ])

  const addNewTeamMember = teamMember => {
    const newMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      position: teamMember.position
    }
    setTeams([...teams, newMember])
  }
  return (
    <div className="App">
        <h1>Team Builder</h1>
        <TeamForm addNewTeamMember={addNewTeamMember}/>
        <Team teams={teams}/>
    </div>
  );
}

export default App;
