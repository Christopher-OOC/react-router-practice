import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAdmin) {
        navigate("/unauthorize", { replace: true });
      }
    },
    [isAuthenticated]
  );

  return isAuthenticated && isAdmin ? children : null;
}

export default ProtectedAdminRoute;
