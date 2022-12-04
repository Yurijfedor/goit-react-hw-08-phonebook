import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
import { useAuth } from '../../hooks/useAuth';
import { Box, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <p>Welcome, {user.name}</p>
      <Button
        variant="contained"
        sx={{ height: 25 }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
