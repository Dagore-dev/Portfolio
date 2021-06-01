import { Link } from "react-router-dom";

import 'components/Header/styles.css';

export default function Header () {

  return(
    <header className='header'>
      <Link className='header__logo' to='/'><img alt='Logo' src='' /></Link>

      <nav>
        <ul className='header__nav'>
          <Link className='header__link header__nav--work' to='/'><li>Principal</li></Link>
          <Link className='header__link header__nav--about' to='/about'><li>Sobre mi</li></Link>
          <Link className='header__link header__nav--contact' to='/contact'><li>Contacto</li></Link>
        </ul>
      </nav>
    </header>
  )
}