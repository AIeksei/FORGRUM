import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [id, SetUserid] = useState(null);
    const [name, SetName] = useState(null);
    const [mod, SetMod] = useState(null);
    const [color, SetColor] = useState(null);
    const signin = (id, mod, name, nameColor,  cb) => {
        SetMod(mod);
        SetUserid(id)
        SetName(name)
        SetColor(nameColor)
        cb();
    }
    const signout = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, id, mod,name, signin, signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}