import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [email, setEmail] = useState(null);
    const [numb, setNumb] = useState(null);
    const [rate, setRate] = useState(null);
    const [gender, setGender] = useState(null);
    const [country, setCountry] = useState(null);
    const [language, setLanguage] = useState(null);
    const [enabled, setEnabled] = useState(null);
    const [nameColor, setNameColor] = useState(null);
    const [moderator, setModerator] = useState(null);
    const [code, setCode] = useState(null);
    const [name, setName] = useState(null);
    const [id, setId] = useState(null);
    const signin = (id, moderator, name, nameColor, enabled,
        language, country, gender, rate, mail, numb,code, cb) => {
        setModerator(moderator);
        setNameColor(nameColor)
        setEnabled(enabled)
        setLanguage(language)
        setCountry(country);
        setGender(gender)
        setRate(rate)
        setNumb(numb)
        setEmail(mail)
        setName (name)
        setId(id)
        setCode(code)
        cb();
    }
    const signout = (cb) => {
        setEnabled(false)
        cb();
    }

    const value = {id, moderator, name, nameColor, enabled,
        language, country, gender, rate, email, numb, code, signin, signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}