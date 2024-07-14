import { Navigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  const { user } = UserAuth();   

  if(!user) {
    return <Navigate to='/'/>
  }

  return(
    children
  );
}
export default ProtectedRoute;