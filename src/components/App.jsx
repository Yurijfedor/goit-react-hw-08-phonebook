import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { PrivateRoute } from './privateRoute';
import { RestrictedRoute } from './restrictedroute';
import { refreshUser } from '../redux/auth/operation';
import { useAuth } from '../hooks/useAuth';

// import { fetchContacts } from 'redux/contacts/operations';
// import { Box } from 'constans';
// import { ContactForm } from './phonebook/contactForm';
// import { ContactList } from './phonebook/contactList';
// import { Filter } from './phonebook/filter';
// import { selectError, selectIsLoading } from 'redux/selectors';

const HomePage = lazy(() => import('../pages/home'));
const RegisterPage = lazy(() => import('../pages/register'));
const LoginPage = lazy(() => import('../pages/logIn'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
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
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <Box
//       width="400px"
//       p={3}
//       ml="auto"
//       mr="auto"
//       mt={4}
//       boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
//     >
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </Box>
//   );
// };
