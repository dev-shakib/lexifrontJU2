import { Content, Header, Footer } from 'components/Layout';
import React from 'react';

const StEmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-light" {...restProps}>
    <Content fluid>
      <Header />
      {children}
      <Footer />
    </Content>
  </main>
);

export default StEmptyLayout;
