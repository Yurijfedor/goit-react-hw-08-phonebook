import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import { Box } from '@mui/system';
import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements[0].value,
        password: form.elements[1].value,
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
        label="e-mail"
        InputLabelProps={{
          focused: true,
        }}
        type="e-mail"
        autoComplete="current-e-mail"
        variant="filled"
      />
      <TextField
        label="Password"
        type="password"
        InputLabelProps={{
          focused: true,
        }}
        autoComplete="current-password"
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ height: 25, display: 'flex', alignItems: 'center', mx: 'auto' }}
      >
        Log In
      </Button>
    </Box>
  );
};
