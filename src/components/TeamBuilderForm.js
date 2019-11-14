import React, {useState} from 'react';


const TeamForm = props => {
    const [team, setTeam] = useState({fullName: '', email: '', position: ''});


const handleChanges = e => {
    setTeam({...team, [e.target.name]: e.target.value})
}

const submitForm = e => {
    e.preventDefault();
    props.addNewTeamMember(team);
    setTeam({fullName: '', email: '', position: ''})
}
return (
    <form onSubmit={submitForm}>
        <label htmlFor='name'>Full Name</label>
        <input id='name' type='text' name='fullName' onChange={handleChanges} value={team.fullName}/>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' name='email' onChange={handleChanges} value={team.email}/>
        <label htmlFor='position'>Position</label>
        <select id='position' name='position'  onChange={handleChanges}>
            <option value='' hidden>--Please chose an option--</option>
            <option value='UX'>UX Designer</option>
            <option value='Front End Developer'>Front End Developer</option>
            <option value='Back End Developer'>Back End Developer</option>
            <option value='Full Stack Developer'>Full Stack Developer</option>
        </select>
        <button type='submit'>Add Team Member</button>
    </form>
)
}

export default TeamForm;