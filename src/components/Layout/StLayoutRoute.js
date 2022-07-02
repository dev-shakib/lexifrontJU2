import React from 'react';
import { Route } from 'react-router-dom';
import {  Footer, Header, } from 'components/Layout';
const StLayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Header />
        <Component {...props} />
        <Footer />
      </Layout>
    )}
  />
);

export default StLayoutRoute;
