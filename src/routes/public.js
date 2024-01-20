import { lazy } from "react";


const Dashboard = lazy(() => import("../views/dashboard"));

const PublicRoutes = {
    path: "/",
    element : <Dashboard />,
    
}

export default PublicRoutes;