import { Navigation } from './navigation';
import { UserMenu } from './userMenu';
import { AuthNav } from './authNav';
import { useAuth } from '../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
