import React,{useState} from 'react';
import './App.css';
import Team from './components/Team';
import TeamForm from './components/TeamBuilderForm'

function App() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: 'Aaron Doran',
      email: 'aarondoran.freelancing@gmail.com',
      position: 'Full Stack Developer'
    }
  ])

  const addNewTeamMember = teamMember => {
    const newMember = {
      id: Date.now(),
      name: teamMember.fullName,
      email: teamMember.email,
      position: teamMember.position
    }
    setTeams([...teams, newMember]);
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
