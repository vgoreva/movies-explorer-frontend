import { Navigate } from 'react-router-dom';

function ProtectedRoute ({ children, loggedIn}) {

return (
    loggedIn ? 
    children
    : <Navigate to={'/signin'} replace/>
)
}

export default ProtectedRoute