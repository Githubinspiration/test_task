import React, { useContext, useState } from "react";
import ComplexNavbar from "../../layouts/complexNavbar";

const Dashboard = () => {
    return (
        <>
            <div className="bg-[#f5f6f7] w-full flex flex-col">
                <ComplexNavbar />
                <div className="h-full overflow-y-scroll">
                    <div className="bg-red-800 h-[500px]"></div>
                    <div className="bg-blue-800 h-[500px]"></div>
                    <div className=" bg-yellow-700 h-[500px]"></div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;