import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ListItem, ListItemText, Button } from '@mui/material';
import { EditContact } from './editModal';

export const Contact = ({ contactInfo }) => {
  const dispatch = useDispatch();

  return (
    <ListItem sx={{ py: 0 }}>
      <ListItemText
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: 'medium',
          letterSpacing: 0,
          color: '#2d5cc2',
        }}
        primary={`${contactInfo.name}: ${contactInfo.number}`}
      />
      <EditContact contact={contactInfo} />
      <Button
        variant="contained"
        sx={{ height: 25, display: 'flex', alignItems: 'center' }}
        onClick={() => dispatch(deleteContact(contactInfo.id))}
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
