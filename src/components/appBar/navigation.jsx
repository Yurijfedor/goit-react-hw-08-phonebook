import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Breadcrumbs, Link } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Breadcrumbs sx={{ flexGrow: 1 }}>
      <Link underline="hover" color="white" component={NavLink} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link
          underline="hover"
          color="white"
          component={NavLink}
          to="/contacts"
        >
          My Contacts
        </Link>
      )}
    </Breadcrumbs>
  );
};
