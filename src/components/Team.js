import React from 'react';

const Team = props => {
    return (
        <div className='wrapper'>
           {props.teams.map(team => (
           <div className='team' key={team.id}>
            <h2>{team.name}</h2>
            <p>{team.email}</p>
            <p>{team.position}</p>
           </div>
           ))} 
        </div>
    )
}

export default Team;