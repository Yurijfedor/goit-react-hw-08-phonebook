import { Contact } from './contact';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(selectFilterValue);
  // const contacts = useSelector(selectContacts);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.value.toLowerCase())
  // );

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
