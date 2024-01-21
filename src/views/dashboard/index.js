import React, { useContext } from "react";
import Context from "../../contexts";

const Dashboard = () => {
    const name = useContext(Context);
    return (
        <>
            <div className="dash">
                  <h1>Hello{name}</h1>
            </div>
        </>
    )
}
export default Dashboard;