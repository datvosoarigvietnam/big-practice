import React, { ReactNode, createContext } from 'react';
import { useAuth } from '@/hooks/useAuth'; // Adjust the path to your useAuth file

export interface AppContextInterface {
  isAuthenticated: boolean;
  setAuthenticated: (accessToken: string) => void;
  reset: () => void;
}
const initAppContext = {
  isAuthenticated: false,
  setAuthenticated: () => { },
  reset: () => { }
}
export const AppContext = createContext<AppContextInterface>(initAppContext);

export default function AppProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { isAuthenticated, setAuthenticated } = useAuth();
  console.log(isAuthenticated);

  const reset = () => {
    setAuthenticated('');
  };

  return (
    <AppContext.Provider value={{ isAuthenticated, setAuthenticated, reset }}>
      {children}
    </AppContext.Provider>
  );
}
