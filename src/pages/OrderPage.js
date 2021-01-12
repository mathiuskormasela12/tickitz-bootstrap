import React, { Fragment } from 'react';

// Import all components
import Navbar from '../components/Navbar';
import OrderHeader from '../components/OrderHeader';
import Footer from '../components/Footer';

function OrderPage() {
  return (
    <Fragment>
      <Navbar />
      <OrderHeader />
      <Footer />
    </Fragment>
  );
}

export default OrderPage;