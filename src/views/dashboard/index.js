import React, { useContext } from "react";
import Context from "../../contexts";

const Dashboard = () => {
    const name = useContext(Context);
    return (
        <>
            <h1>Hello {name}</h1>
        </>
    )
}
export default Dashboard;