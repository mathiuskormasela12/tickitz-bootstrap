import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './Context';

// Import Component
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

const { ShowPasswordProvider } = Context;

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ShowPasswordProvider>
          <Route path="/" exact component={ Home } />
          <Route path="/details" component={ MovieDetails } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/forgot" component={ ForgotPassword } />
        </ShowPasswordProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;