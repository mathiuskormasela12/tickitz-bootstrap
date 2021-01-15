import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainProfile from '../components/MainProfile'

function Profile() {
  return (
    <React.Fragment>
      <div id="home">
        <Navbar />
        <MainProfile />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Profile;