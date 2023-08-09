import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNames, changeSkills } from '../store';

export const Profile = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.user.value.firstname)
  const lastname = useSelector((state) => state.user.value.lastname)
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Ecris ton prénom {firstname} :
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
        <input type="submit" onClick={() => {
          dispatch(
            changeNames({
              firstname:inputs.firstname,
              lastname:inputs.lastname,
              fullname: firstname && lastname ? inputs.firstname + ' ' + inputs.lastname : ''
          }));
          dispatch(
            changeSkills({
              skills:inputs.skills
            })
          );
        }}/>
    </form>
  )
}
