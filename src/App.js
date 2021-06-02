import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import About from 'views/About';
import Contact from 'views/Contact';
import NotFound from 'views/NotFound';
import Work from 'views/Work';

export default function App() {
  return ( 
  <Router>
    
    <Header/>
    
    <Switch>

      <Route exact path='/about'>
        {About}
      </Route>

      <Route exact path='/contact'>
        {Contact}
      </Route>

      <Route exact path='/detail/:proyect'>
        {About}
      </Route>

      <Route exact path='/'>
        {Work}
      </Route>

      <Route>
        {NotFound}
      </Route>


    </Switch>
    
    <Footer/>
  </Router>
  )
}
