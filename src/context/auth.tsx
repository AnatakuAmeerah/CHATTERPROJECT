import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from 'react';
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../config/firebase';
  import {
    getItemFromLocalStorage,
    removeFromLocalStorage,
    saveToLocalStorage,
  } from '../helper/lacalStorage';
  import { useSelector } from 'react-redux';
  import { ProfileData } from '../type/profileData.types';
  import { User, AuthContextValue } from '../type/user.types';
  
  const AuthCtx = createContext<AuthContextValue>(null);
  
  type AuthContextProviderProps = {
    children: ReactNode;
  };
  
  export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>(
      getItemFromLocalStorage('user') || null
    );
  
    const profileData = useSelector(
      (state: { profileData: ProfileData[] }) => state.profileData
    ) as ProfileData[];
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        if (user !== null) {
          const newUser: User = {
            userId: user.uid,
          };
  
          setUser(newUser);
  
          saveToLocalStorage('user', JSON.stringify(newUser));
  
          return;
        }
  
        setUser(null);
        removeFromLocalStorage('user');
      });
  
      return () => {
        unsubscribe();
      };
    }, [profileData]);
  
    if (!profileData || profileData.length === 0) {
      return null;
    }
  
    return <AuthCtx.Provider value={user}>{children}</AuthCtx.Provider>;
  };
  
  export const useAuth = (): AuthContextValue => useContext(AuthCtx);