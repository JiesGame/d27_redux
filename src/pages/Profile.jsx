import { useEffect } from 'react';
import { useState } from 'react';

export const Profile = () => {
  const [inputs, setInputs] = useState({});
  const [skillsArray, setSkillsArray] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

useEffect(() => {
  if(inputs && inputs.skills)
  setSkillsArray(inputs.skills.split(','));
},[inputs])

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Ecris ton prénom :
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Ecris ton nom de famille:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Ecris tes compétences:
        <input 
          type="text" 
          name="skills" 
          value={inputs.skills || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
        <p>{inputs?.firstname}</p>
        <p>{inputs?.lastname}</p>
        <p>{inputs?.skills}</p>
        <div>{skillsArray.map((skill, index) => <p key={index}>{skill}</p>)}</div>
    </form>
  )
}
