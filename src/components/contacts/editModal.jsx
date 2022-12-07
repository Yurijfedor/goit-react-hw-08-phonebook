import * as React from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { ContactForm } from './contactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const EditContact = ({ contact }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        color=""
        sx={{
          height: 25,
          width: 25,
          backgroundColor: '#0288d1',
          mr: 1,
          color: 'white',
          '&:hover': {
            color: '#0288d1',
          },
          '& svg': {
            fontSize: 15,
          },
        }}
        onClick={handleOpen}
      >
        <EditRoundedIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm currentContact={contact} setModalClose={setOpen} />
        </Box>
      </Modal>
    </div>
  );
};
