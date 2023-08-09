/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';

export const Home = () => {
  const firstname = useSelector((state) => state.user.value.firstname)



  return (
    <>
      <div>Bienvenue {firstname}</div>
      <p>N'hésitez pas à changer votre profil.</p>
    </>
  )
}
