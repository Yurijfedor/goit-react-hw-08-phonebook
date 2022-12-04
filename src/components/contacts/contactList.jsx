import { Contact } from './contact';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
};
