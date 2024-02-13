import { createContext, useState } from "react";

export type AuthContextType = {
  isAuthenticated: boolean;
  username: string | null;
  signin: (username: string) => Promise<void>;
  signout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  username: null,
  signin: async (username: string) => {},
  signout: async () => {},
});

type AuthContextProviderProps = {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const signin = async (username: string) => {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    setIsAuthenticated(true);
    setUsername(username);
  }

  const signout = async () => {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    setIsAuthenticated(false);
    setUsername(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        username,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}