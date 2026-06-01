import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const isAuthenticated = sessionStorage.getItem('void_auth') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};
