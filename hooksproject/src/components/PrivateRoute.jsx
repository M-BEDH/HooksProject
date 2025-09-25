import { Navigate } from 'react-router-dom';

function PrivateRoute({ isAdmin, children}) {

    if(!isAdmin) {

        return <Navigate to="/" replace />;
    }

    return children;
}

export default PrivateRoute