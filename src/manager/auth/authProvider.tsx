import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TAuth } from "./authTypes";
import { getData, saveData, removeData } from "../../lib/getterSetter";
import GLOBAL from "../../config/constants/global";

export const LoginContext = createContext({
  auth: {} as TAuth | undefined,
  setAuth: (_token: TAuth | undefined) => {},
});

export const useAuth = () => useContext(LoginContext);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<TAuth | undefined>(getData(GLOBAL.AUTH));

  useEffect(() => {
    const tokenExp = getData(GLOBAL.AUTH)?.tokenExpiry;
    const date = (tokenExp ? new Date(tokenExp) : new Date()).getTime();
    if (date > Date.now()) {
      const auth2 = getData(GLOBAL.AUTH) as TAuth;
      if (auth !== undefined) {
        setAuth(auth2);
      }
    }
  }, [auth]);

  const loginProviderValue = useMemo(() => {
    const saveAuth = (_auth: TAuth | undefined) => {
      if (_auth) saveData(GLOBAL.AUTH, _auth);
      else removeData(GLOBAL.AUTH);
      setAuth(_auth);
    };

    return { auth, setAuth: saveAuth };
  }, [auth]);

  return (
    <LoginContext.Provider value={loginProviderValue}>
      {children}
    </LoginContext.Provider>
  );
}
