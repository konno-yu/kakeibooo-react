import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DateContext } from "./HouseholdAccount";
import React from 'react';
import { calendarContext } from "./CalendarContext";

const ReceiptTitle: React.FC = () => {
    const context = React.useContext(calendarContext);

    function createDateString() {
        const year = context.targetDate.getFullYear();
        const month = ('00' + (context.targetDate.getMonth() + 1)).slice(-2);
        const date = ('00' + (context.targetDate.getDate())).slice(-2);
        return `${year}/${month}/${date}`;
    }
    return (
        <div className="title">
            <FontAwesomeIcon size="lg" icon={faPiggyBank} style={{color: "#EEEEEE"}}/>
            {createDateString()}
        </div>
    )

}

export default ReceiptTitle;