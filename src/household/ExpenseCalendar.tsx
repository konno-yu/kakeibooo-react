import CalendarTitle from './CalendarTitle';
import CalendarHeader from './CalendarHeader';
import './ExpenseCalendar.scss';
import CalendarRow from './CalendarRow';

const ExpenseCalendar: React.FC = () => {
    const sampleData: {date: Date, expense: number, store: string}[] = [
        {date: new Date("2021-01-01T00:00:00"), expense: 1000, store: "サミット"},
        {date: new Date("2021-01-02T00:00:00"), expense: 1200, store: "サミット"},
        {date: new Date("2021-01-03T00:00:00"), expense: 700, store: "サミット"},
        {date: new Date("2021-01-04T00:00:00"), expense: 2100, store: "サミット"},
        {date: new Date("2021-01-05T00:00:00"), expense: 500, store: "サミット"},
        {date: new Date("2021-01-06T00:00:00"), expense: 1000, store: "サミット"},
        {date: new Date("2021-01-07T00:00:00"), expense: 1400, store: "サミット"}
    ];
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
                        Object.keys(sampleData).map((weekIndex => {
                            return (
                                    <CalendarRow rowData={sampleData[weekIndex]}></CalendarRow>
                                )
                        }))
                    }
                </div>
            </div>
    )
}

export default ExpenseCalendar;