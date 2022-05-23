import { useContext } from 'react';
import {AuthContext}  from '../Hoc/AuthProvider';
 function UseAuth() {
    return useContext(AuthContext);
}
export {UseAuth}