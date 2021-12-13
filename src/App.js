import './App.css';
import Auth from './Pages/Auth';
import LandingPage from './Pages/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PasswordInput from './Components/PasswordInput';
import ForgotPassword from './Components/ForgotPassword';
import ResetSuccess from './Components/ResetSuccess';
import PasswordReset from './Components/PasswordReset';
import PasswordResetSuccess from './Components/PasswordResetSuccess';
import Dashboard from './Pages/Dashboard';
import './Components/circular-std-medium-500.ttf';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            < LandingPage />            
          </Route>

          <Route path="/auth">
            < Auth />
          </Route>

          <Route path="/dashboard">
            < Dashboard />
          </Route>

          <Route path="/passwordInput">
            < PasswordInput />
          </Route>

          <Route path="/forgotPassword">
            < ForgotPassword />
          </Route>

          <Route path="/passwordResetviaemail">
            < ResetSuccess />
          </Route>

          <Route path="/resetpassword">
            <PasswordReset/>
          </Route>

          <Route path="/passwordresetsuccess">
            < PasswordResetSuccess />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
