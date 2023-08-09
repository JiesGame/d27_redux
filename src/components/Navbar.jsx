import { Link } from "react-router-dom";
import { Username } from './Username';

export const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='profile'>Profile</Link>
      <Username />
    </div>
  )
}
