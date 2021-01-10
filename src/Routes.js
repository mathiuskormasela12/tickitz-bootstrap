import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Component
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/details" component={ MovieDetails } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/forgot" component={ ForgotPassword } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;