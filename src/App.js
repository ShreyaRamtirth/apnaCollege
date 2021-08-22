import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import HomePage from './components/HomePage.jsx';
function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
      <Route exact path="/"><LoginPage /></Route>
      <Route exact path="/Home"><HomePage /></Route>
     
      </Switch>
      </Router>
    </div>
  );
}

export default App;
