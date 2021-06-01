import 'components/Footer/styles.css'

export default function Footer () {

  return(
    <footer className='footer'>
      <small className='footer__info'>
        David Gómez | Frontend Developer | <a className='footer__info--github' target='_blanck' href='https://github.com/Dagore-dev'>Github</a>
      </small>

      <small className='footer__email'>
        david.gomez.redondo.dev@gmail.com
      </small>
    </footer>
  )
}