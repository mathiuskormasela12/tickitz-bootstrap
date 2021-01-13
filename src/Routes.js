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
import PaymentPage from './pages/PaymentPage';
import ProofPayment from './pages/ProofPayment';

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
          <Route path="/payment" component={ PaymentPage } />
          <Route path="/proof" component={ ProofPayment } />
        </ShowPasswordProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;