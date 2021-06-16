import s from './Navbar.module.css';
import { NavLink} from 'react-router-dom';



function Navbar (props){ 
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/homePage' activeClassName = {s.active}>Home page</NavLink>
      </div>
      <div>
        < NavLink to='/favoriteHeroes' activeClassName = {s.active}>Favorite heroes</NavLink>
      </div>
     </nav>)
}
export default Navbar;