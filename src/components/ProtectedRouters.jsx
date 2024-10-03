import { Navigate } from "react-router-dom";

function ProtectedRouters({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRouters;
