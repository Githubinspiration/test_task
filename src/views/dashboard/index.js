import ComplexNavbar from "../../layouts/complexNavbar";
import Notification from "../notification";
import UserInfo from "../userInfo";
import Report from "../report";
import ReportView from "../report/view"

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#eef2f6] w-screen z-0 pl-[330px] top-0 left-0">
        <div className="w-full fixed pl-[320px] top-[30px] left-0">
          <ComplexNavbar />
        </div>
        <div className="w-100% h-screen px-[15px] pb-[15px] pt-[100px]">
            <Notification />
        </div>
        <div className="w-100% h-screen px-[15px] pb-[15px] pt-[100px]">
            <UserInfo />
        </div>
        <div className="w-100% h-screen px-[30px] pb-[30px] pt-[115px]">
            <Report />
        </div>
        <div className="w-100% h-screen px-[30px] pb-[30px] pt-[115px]">
            <ReportView />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
