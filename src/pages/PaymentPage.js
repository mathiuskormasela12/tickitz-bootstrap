import React, { Fragment } from 'react';

// Import all components
import Navbar from '../components/Navbar';
import PaymentHeader from '../components/PaymentHeader';
import Footer from '../components/Footer';

function PaymentPage() {
  return (
    <Fragment>
      <Navbar />
      <PaymentHeader />
      <Footer />
    </Fragment>
  );
}

export default PaymentPage;