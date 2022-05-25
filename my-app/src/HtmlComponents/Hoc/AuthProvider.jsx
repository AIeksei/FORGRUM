import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [id, SetUserid] = useState(null);
    const [mod, SetMod] = useState(null);

    const signin = (id, mod, cb) => {
        SetMod(mod);
        SetUserid(id)
        cb();
    }
    const signout = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, id, mod, signin, signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}