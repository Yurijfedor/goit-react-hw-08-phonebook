import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/contacts/contactList';
import { ContactForm } from 'components/contacts/contactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/selectors';
import { Filter } from 'components/contacts/filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>

      <ContactList />
    </>
  );
}
