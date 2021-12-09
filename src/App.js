import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Shared/Navigation/Navigation';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path='/home'>
                <Home/>
              </Route>
              <PrivateRoute path='/appointment'>
                <Appointment/>
              </PrivateRoute>
              <PrivateRoute path='/dashboard'>
                <Dashboard/>
              </PrivateRoute>
              <Route path='/register'>
                <Register/>
              </Route>
              <Route path='/login'>
                <Login/>
              </Route>
            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
