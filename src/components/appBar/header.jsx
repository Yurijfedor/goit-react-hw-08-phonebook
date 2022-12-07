import { Navigation } from './navigation';
import { UserMenu } from './userMenu';
import { AuthNav } from './authNav';
import { useAuth } from '../../hooks/useAuth';
import { AppBar, Toolbar, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{ zIndex: 2 }}>
      <Toolbar>
        <Link
          component={NavLink}
          to="/"
          underline="none"
          sx={{
            color: 'white',
            display: 'flex',
            mr: 2,
            fontWeight: 700,
            fontSize: 30,
          }}
        >
          {'My Phonebook'}
        </Link>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
