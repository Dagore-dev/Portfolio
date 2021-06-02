import 'components/Intro/styles.css';

import html5 from 'assets/images/html-5-icon.svg';
import css3 from 'assets/images/css-3-icon.svg';
import js from 'assets/images/javascript-icon.svg';
import react from 'assets/images/react-icon.svg';
import git from 'assets/images/git-icon.svg';
import github from 'assets/images/github-icon.svg';


export default function Intro () {

  return(
    <>
        <h1 className='intro'>
          David Gómez, desarrollador Frontend con React.js
        </h1>

        <div className='knowledges'>
          <img className='knowledges__icon knowledges__icon--html5' alt='html5' src={html5} />
          <img className='knowledges__icon knowledges__icon--css3' alt='css3' src={css3} />
          <img className='knowledges__icon knowledges__icon--js' alt='js' src={js} />
          <img className='knowledges__icon knowledges__icon--react' alt='react' src={react} />
          <img className='knowledges__icon knowledges__icon--git' alt='git' src={git} />
          <img className='knowledges__icon knowledges__icon--github' alt='github' src={github} />
        </div>
    </>
  )
}