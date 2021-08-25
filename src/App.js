import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import Routes from './components/Routes.jsx';
function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
      <Route exact path="/"><LoginPage /></Route>
      <Route path="/Home">
        <Routes />
      </Route>
      </Switch>
</Router>
    </div>
  );
}

export default App;
