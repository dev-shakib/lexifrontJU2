import { Content, Footer, StHeader} from 'components/Layout';
import React from 'react';

class StMainLayout extends React.Component {
  
  // close sidebar when
  // handleContentClick = event => {
  //   // close sidebar if sidebar is open and screen size is less than `md`
  //   if (
  //     MainLayout.isSidebarOpen() &&
  //     (this.props.breakpoint === 'xs' ||
  //       this.props.breakpoint === 'sm' ||
  //       this.props.breakpoint === 'md')
  //   ) {
  //     this.openSidebar('close');
  //   }
  // };

  
  render() {
    const { children } = this.props;
    return (
      <main className="cr-stapp">        
        <Content fluid>
          <StHeader />
          {children}
          <Footer />
        </Content>
      </main>
    );
  }
}

export default StMainLayout;
