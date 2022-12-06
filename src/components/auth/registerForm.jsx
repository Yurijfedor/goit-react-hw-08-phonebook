import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import { Box, TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements[2].value);
    dispatch(
      register({
        name: form.elements[0].value,
        email: form.elements[1].value,
        password: form.elements[2].value,
      })
    );
    form.reset();
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
        label="name"
        InputLabelProps={{
          focused: true,
        }}
        type="text"
        variant="filled"
      />
      <TextField
        label="e-mail"
        InputLabelProps={{
          focused: true,
        }}
        type="e-mail"
        variant="filled"
      />
      <TextField
        label="Password"
        type="password"
        InputLabelProps={{
          focused: true,
        }}
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ height: 25, display: 'flex', alignItems: 'center', mx: 'auto' }}
      >
        Register
      </Button>
    </Box>
  );
};
