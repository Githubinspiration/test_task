import React, { lazy } from "react";

const Dashboard = lazy(() => import("../views/dashboard"));

const PublicRoutes = () => (
  <>
    <Dashboard />
  </>
);

export default PublicRoutes;
