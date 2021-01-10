import React from 'react';

import Sidebar from '../components/Sidebar';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <React.Fragment>
      <div id="register">
        <div className="hero">
          <section className="container-fluid">
            <div className="row hero-head">
              <Sidebar />
              <RegisterForm />
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;