import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
// import { DateContext } from './HouseholdAccount';
import React from 'react';
import { calendarContext } from "./CalendarContext";

function getEnglishNotation(month: number) {
    const englishNotation: Record<number, string> = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };
    return englishNotation[month];
}
const CalendarTitle: React.FC = () => {
    const context = React.useContext(calendarContext);

    function goPrevMonth() {
        const prevMonth = new Date(context.targetDate);
        prevMonth.setMonth(context.targetDate.getMonth() - 1, 1);
        context.setTargetDate(prevMonth);
    }

    function goNextMonth() {
        const nextMonth = new Date(context.targetDate);
        nextMonth.setMonth(context.targetDate.getMonth() + 1, 1);
        context.setTargetDate(nextMonth);
    }
    return (
        <>
            <IconButton onClick={() => goPrevMonth()}><FontAwesomeIcon icon={faChevronLeft}/></IconButton>
            <div className="year">{context.targetDate.getFullYear()}</div>
            <div className="month">{getEnglishNotation(context.targetDate.getMonth() + 1)}</div>
            <IconButton onClick={() => goNextMonth()}><FontAwesomeIcon icon={faChevronRight}/></IconButton>
        </>
    )
}

export default CalendarTitle;