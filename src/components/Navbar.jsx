import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const fullname = useSelector((state) => state.user.value.fullname);
  const skills = useSelector((state) => state.skills.value.skills)


  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='profile'>Profile</Link>
      {fullname ? <p>Compte de {fullname}</p> : <p>Compte inconnu</p>}
      {skills === null? <p>Aucune compétence</p>: <p>{skills}</p>}
     </div>
  )
}
