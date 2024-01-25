import ComplexNavbar from "../../layouts/complexNavbar";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#f5f6f7] w-full z-0 ml-[330px]">
        <div className="w-full">
          <ComplexNavbar />
        </div>
        <div className="bg-red-800 h-[500px]"></div>
        <div className="bg-blue-800 h-[500px]"></div>
        <div className=" bg-yellow-700 h-[500px]"></div>
      </div>
    </>
  );
};
export default Dashboard;
