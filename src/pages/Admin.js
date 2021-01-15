import React from 'react';

import Navbar from '../components/Navbar';
import MainAdmin from '../components/MainAdmin';
import Footer from '../components/Footer';

function Login() {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <MainAdmin />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Login;