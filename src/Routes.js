import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage, PrivateRoute } from './auth';
import { BrowsePhotosPage, UploadPhotoPage } from './photos';
import { Navbar } from './navigation';

const routes = [
  { path: '/sign-in', Component: SignInPage },
  { path: '/', Component: BrowsePhotosPage, exact: true, private: true },
  { path: '/upload-photo', Component: UploadPhotoPage, private: true }
];

export const Routes = ({ isLoading, user }) => (
  <Router>
    <Navbar user={user} />
    <Switch>
      {routes.map((route, index) => {
        const RouteType = route.private ? PrivateRoute : Route;

        return (
          <RouteType
            key={index}
            path={route.path}
            exact={route.exact}
            isLoading={isLoading}
            isAuthed={!!user}
          >
            <route.Component />
          </RouteType>
        );
      })}
    </Switch>
  </Router>
);
