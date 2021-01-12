import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './Context';

// Import Component
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import OrderPage from './pages/OrderPage';

const { ShowPasswordProvider } = Context;

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ShowPasswordProvider>
          <Route path="/" exact component={ Home } />
          <Route path="/details/:title/:year" component={ MovieDetails } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/forgot" component={ ForgotPassword } />
          <Route path="/order" component={ OrderPage } />
        </ShowPasswordProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;