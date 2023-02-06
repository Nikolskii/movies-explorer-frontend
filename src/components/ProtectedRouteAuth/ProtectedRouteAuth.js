import { Navigate } from 'react-router-dom';

const ProtectedRouteAuth = ({ isLoggedIn, children }) => {
  return !isLoggedIn ? children : <Navigate to="/profile" />;
};

export default ProtectedRouteAuth;
