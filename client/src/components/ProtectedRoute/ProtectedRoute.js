import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  console.log(user)

  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
