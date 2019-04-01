import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// sidebar nav config
// import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return (
      <div className="app">
          <Suspense  fallback={this.loading()}>
            <DefaultHeader /> 
          </Suspense>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/login" />
                </Switch>
              </Suspense>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
      </div>
    );
  }
}

export default DefaultLayout;
