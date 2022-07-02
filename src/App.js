import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, StLayoutRoute, MainLayout, StMainLayout} from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import FirstSplashFormPage from 'pages/FirstSplashFormPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginFormPage from './pages/LoginFormPage';
import StLoginFormPage from './pages/studentPage/StLoginFormPage';
import StRegFormPage from './pages/studentPage/StRegFormPage';
import RegFormPage from './pages/RegFormPage';
import OtpRegFormPage from './pages/OtpRegFormPage';
import CongratFormPage from './pages/CongratFormPage';
import StCongratFormPage from './pages/studentPage/StCongratFormPage';
import StConfLoginFormPage from './pages/studentPage/StConfLoginFormPage';
import StMenuPage from './pages/studentPage/StMenuPage';
import StActivityFirstPage from './pages/studentPage/StActivityFirstPage';
import StActivitySecPage from './pages/studentPage/StActivitySecPage';
import StActivityThirdPage from './pages/studentPage/StActivityThirdPage';
import StActivityFourPage from './pages/studentPage/StActivityFourPage';
import './styles/reduction.scss';
import Otpregfun from './pages/Otpregfun';


const ActivityFirstPage = React.lazy(() => import('pages/ActivityFirstPage'));
const ActivitySecPage = React.lazy(() => import('pages/ActivitySecPage'));
const ActivityThirdPage = React.lazy(() => import('pages/ActivityThirdPage'));
const ActivityFourPage = React.lazy(() => import('pages/ActivityFourPage'));
const ConfigurationPage = React.lazy(() => import('pages/ConfigurationPage'));
const MwPage = React.lazy(() => import('pages/MwFormPage'));
const ReportPage = React.lazy(() => import('pages/ReportFormPage'));
const AboutPage = React.lazy(() => import('pages/AboutFormPage'));
// const StMenuPage = React.lazy(() => import('pages/studentPage/StMenuPage'));
// const StActivityFirstPage = React.lazy(() => import('pages/studentPage/StActivityFirstPage'));
// const StActivitySecPage = React.lazy(() => import('pages/studentPage/StActivitySecPage'));
// const StActivityThirdPage = React.lazy(() => import('pages/studentPage/StActivityThirdPage'));
// const StActivityFourPage = React.lazy(() => import('pages/studentPage/StActivityFourPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};
console.log('this is pub url', getBasename())

class App extends React.Component {
  render() {
    return (
      // <div>hello hello hello</div>
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
           
			<LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={props => (
                <FirstSplashFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/loginform"
              layout={EmptyLayout}
              component={props => (
                <LoginFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/stloginform"
              layout={EmptyLayout}
              component={props => (
                <StLoginFormPage {...props}  />
              )}
            />            
            <LayoutRoute
              exact
              path="/regform"
              layout={EmptyLayout}
              component={props => (
                <RegFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/stregform"
              layout={EmptyLayout}
              component={props => (
                <StRegFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/otpregform"
              layout={EmptyLayout}
              component={props => (
                // <OtpRegFormPage {...props}  />
                <Otpregfun {...props}/>
              )}
            />
            <LayoutRoute
              exact
              path="/congratform"
              layout={EmptyLayout}
              component={props => (
                <CongratFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/stcongratform"
              layout={EmptyLayout}
              component={props => (
                <StCongratFormPage {...props}  />
              )}
            />
             <LayoutRoute
              exact
              path="/stconfloginformpage"
              layout={EmptyLayout}
              component={props => (
                <StConfLoginFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/stmenu"
              layout={StMainLayout}
              component={props => (
                <StMenuPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/stactfirst"
              layout={StMainLayout}
              component={props => (
                <StActivityFirstPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/stactsec"
              layout={StMainLayout}
              component={props => (
                <StActivitySecPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/stactthird"
              layout={StMainLayout}
              component={props => (
                <StActivityThirdPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/stactfour"
              layout={StMainLayout}
              component={props => (
                <StActivityFourPage {...props}  />
              )}
            />
            
            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/act01" component={ActivityFirstPage} />                
                <Route exact path="/actsec" component={ActivitySecPage} />
                <Route exact path="/actthird" component={ActivityThirdPage} />
                <Route exact path="/actfour" component={ActivityFourPage} />
                <Route exact path="/config" component={ConfigurationPage} />
                <Route exact path="/mw" component={MwPage} />
                <Route exact path="/report" component={ReportPage} />
                <Route exact path="/about" component={AboutPage} />                     
              </React.Suspense>
            </MainLayout>
            {/* <StMainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>                
                <Route exact path="/stmenu" component={StMenuPage} />                
                <Route exact path="/stactfirst" component={StActivityFirstPage} />                
                <Route exact path="/stactsec" component={StActivitySecPage} />
                <Route exact path="/stactthird" component={StActivityThirdPage} />
                <Route exact path="/stactfour" component={StActivityFourPage}  />                                       
              </React.Suspense>
            </StMainLayout> */}
            
            <Redirect to="/" />
          </Switch>          
        </GAListener>        
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
