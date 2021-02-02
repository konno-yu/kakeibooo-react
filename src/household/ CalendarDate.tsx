import React from 'react';
import { calendarContext } from './CalendarContext';
// import { DateContext } from './HouseholdAccount';
interface CalendarDateProps {
    date: number;
    expense: number;
}

const CalendarDate: React.FC<CalendarDateProps> = (props: CalendarDateProps) => {
    const context = React.useContext(calendarContext);
    function changeDate(targetDate: number) {
        const newDate = new Date(context.targetDate);
        newDate.setDate(targetDate);
        context.setTargetDate(newDate);
    }
    function addColorClass() {
        const max = 40000;
        const perDay = max / 31;
        if(props.expense === 0) {
            return 'gold';
        }
        if((perDay * 1.5) < props.expense) {
            return 'red';
        }
        if((perDay * 0.5) > props.expense) {
            return 'green';
        }
        return 'gray';
    }

    return (
        <>
            <div onClick={() => changeDate(props.date)} className={`date ${addColorClass()}`}>{props.date}</div>
            <div className="expense">¥{(props.expense).toLocaleString()}</div>
        </>
    );
}

export default CalendarDate;