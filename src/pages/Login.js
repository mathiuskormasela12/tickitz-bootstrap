import React from 'react';

import LoginSidebar from '../components/LoginSidebar';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <React.Fragment>
      <div id="login">
        <div className="hero">
          <section className="container-fluid">
            <div className="row hero-head">
              <LoginSidebar />
              <LoginForm />
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;