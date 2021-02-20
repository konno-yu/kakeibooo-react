import React from 'react';
import { calendarContext } from './CalendarContext';

interface CalendarDateProps {
    data: { date: Date | '', expense: number }
}

const CalendarDate: React.FC<CalendarDateProps> = (props: CalendarDateProps) => {
    const context = React.useContext(calendarContext);
    function changeDate(targetDate: Date | '') {
        if (typeof targetDate === 'string') return;
        const newDate = new Date(context.targetDate);
        newDate.setDate(targetDate.getDate());
        context.setTargetDate(newDate);
    }
    function addColorClass() {
        const max = 40000;
        const perDay = max / 31;
        if (!props.data.expense) return;
        if (props.data.expense === 0) {
            return 'gold';
        }
        if ((perDay * 1.5) < props.data.expense) {
            return 'red';
        }
        if ((perDay * 0.5) > props.data.expense) {
            return 'green';
        }
        return 'gray';
    }

    return (
        <>
            { props.data.date &&
                <>
                <div onClick={() => changeDate(props.data.date)} className={`date ${addColorClass()}`}>{props.data.date.getDate()}</div>
                    <div className="expense">¥{(props.data.expense).toLocaleString()}</div>
                </>
            }
            { (!props.data.date && props.data.expense > 0) &&
                <>
                    <div className="date"></div>
                    <div className="expense"></div>
                </>
            }
            </>
        );
    }

    export default CalendarDate;