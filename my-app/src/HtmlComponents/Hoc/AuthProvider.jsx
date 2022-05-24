import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userid, SetUserid] = useState(null);
    const [mod, SetMod] = useState(null);

    const signin = (newUser,userid, mod, cb) => {
        SetMod(mod);
        SetUserid(userid)
        setUser(newUser);
        cb();
    }
    const signout = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, userid, signin, signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}