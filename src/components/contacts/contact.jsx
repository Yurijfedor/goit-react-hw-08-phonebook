import PropTypes from 'prop-types';
import { ButtonEl } from './contactForm.styled';
import { Box } from 'constans';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export const Contact = ({ contactInfo: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" justifyContent="space-between">
      {name}: {number}
      <ButtonEl onClick={() => dispatch(deleteContact(id))}>Delete</ButtonEl>
    </Box>
  );
};

Contact.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
