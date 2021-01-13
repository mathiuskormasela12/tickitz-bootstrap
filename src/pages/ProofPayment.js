import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainProof from '../components/MainProof';

function ProofPayment() {
  return (
    <React.Fragment>
      <div id="home">
        <Navbar />
        <MainProof />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default ProofPayment;