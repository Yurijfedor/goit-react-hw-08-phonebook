import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/contacts/contactList';
import { ContactForm } from 'components/contacts/contactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/selectors';
import { Filter } from 'components/contacts/filter';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="sm" sx={{ position: 'relative' }}>
      <Box component="h1" sx={{ color: '#42a5f5', textAlign: 'center' }}>
        Your contacts
      </Box>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>

      <ContactList />
    </Container>
  );
}
