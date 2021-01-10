import React from 'react';

import Sidebar from '../components/Sidebar';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

function ForgotPassword() {
  return (
    <React.Fragment>
      <div id="forgot">
        <div className="hero">
          <section className="container-fluid">
            <div className="row hero-head">
              <Sidebar />
              <ForgotPasswordForm />
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ForgotPassword;