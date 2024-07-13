import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./authProvider";

export function CheckAuth({ children }: { children: ReactNode }) {
  const ctx = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authRoutes = ["/", "/about", "/register"];

    if (authRoutes.indexOf(location.pathname) === -1 && !ctx.auth)
      navigate("/");
  }, [navigate, ctx.auth, location.pathname]);

  useEffect(() => {
    if (location.pathname === "/logout") {
      ctx.setAuth(undefined);
      navigate("/");
    }
  }, [ctx, location.pathname, navigate]);
  return children;
}
