import { useLocation, Navigate } from 'react-router-dom';
import { UseAuth } from '../Hook/UseAuth';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const value = UseAuth()
    if (!value.enabled) {
        return <Navigate to='/login' state={{from: location}} />
    }

  return children;
}

export {RequireAuth};
