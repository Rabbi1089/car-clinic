import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../src/Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AUthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("CurrentUser-->", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
  };
  return (
    <AUthContext.Provider value={authInfo}>{children}</AUthContext.Provider>
  );
};

export default AuthProvider;
