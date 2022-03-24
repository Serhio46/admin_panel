import { publicRoutes, routesName } from "../../routes";
import { Route, Routes, Navigate } from 'react-router-dom';

const AppRouter = () => {
    return (
        <>
            <Routes>
                {publicRoutes.map((route) => {
                return <Route path={route.path} element={<route.component />} key={route.path} /> 
                })}
                <Route path="*" element={<Navigate to={routesName.HOME} replace />} />
            </Routes>
        </>
    );
}

export default AppRouter;