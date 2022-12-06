import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ListItem, ListItemText, Button } from '@mui/material';

export const Contact = ({ contactInfo: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <ListItem sx={{ py: 0 }}>
      <ListItemText
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: 'medium',
          letterSpacing: 0,
          color: '#42a5f5',
        }}
        primary={`${name}: ${number}`}
      />

      <Button
        variant="contained"
        sx={{ height: 25, display: 'flex', alignItems: 'center', mx: 'auto' }}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ListItem>
  );
};

Contact.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
