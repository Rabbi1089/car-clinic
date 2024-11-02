import { useContext } from 'react';
import { AUthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AUthContext)
    const location = useLocation()


    if (user?.email) {
        return children
    }

    if (loading) {
        return <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 mx-auto" />
    }

    return (
        <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
    );
};

export default PrivateRoute;