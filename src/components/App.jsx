import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Box } from 'constans';
import { ContactForm } from './phonebook/contactForm';
import { ContactList } from './phonebook/contactList';
import { Filter } from './phonebook/filter';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box
      width="400px"
      p={3}
      ml="auto"
      mr="auto"
      mt={4}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Box>
  );
};
