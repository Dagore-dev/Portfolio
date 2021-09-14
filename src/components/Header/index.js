import { NavLink } from "react-router-dom";

import 'components/Header/styles.css';
import logo from 'assets/images/react-logo.svg';

export default function Header () {


  return(
    <header className='header'>
      <NavLink className='header__logo' to='/'><img alt='Logo' src={logo} /></NavLink>

      <nav>
        <ul className='header__nav'>
          <NavLink exact activeClassName='header__link--active' className='header__link header__nav--work' to='/'><li>Principal</li></NavLink>
          <NavLink activeClassName='header__link--active' className='header__link header__nav--about' to='/about'><li>Sobre mi</li></NavLink>
        </ul>
      </nav>
    </header>
  )
}