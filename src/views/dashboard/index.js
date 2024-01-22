import React, { useContext, useState } from "react";
import Context from "../../contexts";
import ButtonGen from "../../components/Button_general";

const Dashboard = () => {
    const name = useContext(Context);
    const [dayButton, setDayButton] = useState(false);
    const day_click = () => {
        setDayButton(true);
    }
    const week_click = () => {

    }
    const month_click = () => {

    }
    const year_click = () => {

    }
    return (
        <>
            <div className="dash">
                <div className="button">
                    <ButtonGen BTName={"Day"} onClick={day_click} btnFlag={true} />
                    <ButtonGen BTName={"Week"} onClick={week_click} btnFlag={true} />
                    <ButtonGen BTName={"Month"} onClick={month_click} btnFlag={true} />
                    <ButtonGen BTName={"Year"} onClick={year_click} btnFlag={true} />
                </div>
            </div>
        </>
    )
}
export default Dashboard;