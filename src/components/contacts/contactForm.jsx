import { useState } from 'react';
import { FormEl, LabelEl, ButtonEl } from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = evt => {
    const name = evt.target.name;
    switch (name) {
      case 'name':
        setName(evt.target.value);
        break;

      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactName = evt.target.name.value;
    const contactNumber = evt.target.number.value;
    const contact = {
      name: contactName,
      number: contactNumber,
    };
    const checkName = contacts.find(el => el.name === contact.name);
    !checkName
      ? dispatch(addContact(contact))
      : alert(` ${checkName.name} is already in contacts `);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <LabelEl>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelEl>
      <LabelEl>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelEl>

      <ButtonEl type="submit">Add contact</ButtonEl>
    </FormEl>
  );
};
