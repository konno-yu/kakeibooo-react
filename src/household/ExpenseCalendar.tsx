import CalendarTitle from './CalendarTitle';
import CalendarHeader from './CalendarHeader';
import './ExpenseCalendar.scss';
import CalendarRow from './CalendarRow';
import CalendarSummary from './CalendarSummary';

    expense: number;
}

    }
    return(
        <div className="calendar">
            <div className="title">
                <CalendarTitle/>
            </div>
            <div className="header">
                <CalendarHeader/>
            </div>
            <div className="body">
                {
                    Object.keys(dateData).map((weekIndex => {
                        return (
                                <CalendarRow rowData={dateData[weekIndex]}></CalendarRow>
                            )
                    }))
                }
            </div>
            <div className="summary">
                <CalendarSummary/>
            </div>
        </div>
    )
}

export default ExpenseCalendar;