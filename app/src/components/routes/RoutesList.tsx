import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import Erorr404 from '../../pages/Error404';


const RoutesList = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            path={route.path}
                            key={`route ${route.path}`}
                            element={<route.component />}
                        >
                        </Route>
                    )
                })}
                <Route path='*' element={<Erorr404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesList;