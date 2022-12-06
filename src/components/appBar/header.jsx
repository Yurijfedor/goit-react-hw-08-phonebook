import { Navigation } from './navigation';
import { UserMenu } from './userMenu';
import { AuthNav } from './authNav';
import { useAuth } from '../../hooks/useAuth';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{ zIndex: 2 }}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{ display: 'flex', mr: 2, fontWeight: 700 }}
        >
          My Phonebook
        </Typography>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
