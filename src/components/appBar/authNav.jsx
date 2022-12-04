import { NavLink } from 'react-router-dom';
import { Breadcrumbs, Link } from '@mui/material';

export const AuthNav = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="white" component={NavLink} to="/register">
        Register
      </Link>
      <Link underline="hover" color="white" component={NavLink} to="/login">
        Log In
      </Link>
    </Breadcrumbs>
  );
};
