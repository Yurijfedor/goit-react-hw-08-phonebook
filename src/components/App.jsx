import { useDispatch } from 'react-redux';
import { useEffect, lazy, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './contacts/layout';
import { PrivateRoute } from './auth/privateRoute';
import { RestrictedRoute } from './auth/restrictedroute';
import { refreshUser } from '../redux/auth/operation';
import { useAuth } from '../hooks/useAuth';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Box } from '@mui/material';
import { options } from './particles/options';

const HomePage = lazy(() => import('../pages/home'));
const RegisterPage = lazy(() => import('../pages/register'));
const LoginPage = lazy(() => import('../pages/logIn'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Box component={Routes}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Box>
      )}
      ;
    </>
  );
};
