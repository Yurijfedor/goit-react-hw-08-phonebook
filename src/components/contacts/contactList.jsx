import { Contact } from './contact';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(contact => {
        return <Contact key={contact.id} contactInfo={contact} />;
      })}
    </List>
  );
};
