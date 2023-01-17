import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/ ">Home</NavLink>
      <NavLink to="/contacts">Contacts Book</NavLink>
    </nav>
  );
};

export default Navigation;
