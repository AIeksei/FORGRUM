import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser, mod, SetMod] = useState(null);

    const signin = (newUser,mod, cb) => {
        SetMod(mod);
        setUser(newUser);
        cb();
    }
    const signout = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, signin, signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}