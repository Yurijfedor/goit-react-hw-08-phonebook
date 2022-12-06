import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import { Box, TextField, Button } from '@mui/material';

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
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          my: 2,
          mx: 'auto',
          width: '25ch',
          display: 'block',
        },
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        required
        label="name"
        InputLabelProps={{
          focused: true,
        }}
        name="name"
        value={name}
        variant="filled"
        onChange={handleChange}
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          title:
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        }}
      />
      <TextField
        required
        label="number"
        InputLabelProps={{
          focused: true,
        }}
        name="number"
        value={number}
        variant="filled"
        onChange={handleChange}
        inputProps={{
          pattern: '^[+][0-9]{1,3}.[0-9]{4,14}(?:x.+)?$',
          title:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        }}
      ></TextField>
      <Button
        type="submit"
        variant="contained"
        sx={{ height: 25, display: 'flex', alignItems: 'center', mx: 'auto' }}
      >
        Add contact
      </Button>
    </Box>
  );
};
