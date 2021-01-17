import CalendarTitle from './CalendarTitle';
import CalendarHeader from './CalendarHeader';
import './ExpenseCalendar.scss';
import CalendarRow from './CalendarRow';
import CalendarSummary from './CalendarSummary';

type SampleData = {
    date: Date;
    expense: number;
    store: string;
}

const ExpenseCalendar: React.FC = () => {
    const sampleData: {[weekIndex: string]: SampleData[]} = {
        1: [
            {date: new Date("2021-01-01T00:00:00"), expense: 1200, store: "サミット"},
            {date: new Date("2021-01-02T00:00:00"), expense: 1400, store: "サミット"},
            {date: new Date("2021-01-03T00:00:00"), expense: 2200, store: "サミット"},
            {date: new Date("2021-01-04T00:00:00"), expense: 700, store: "サミット"},
            {date: new Date("2021-01-05T00:00:00"), expense: 200, store: "サミット"},
            {date: new Date("2021-01-06T00:00:00"), expense: 1150, store: "サミット"},
            {date: new Date("2021-01-07T00:00:00"), expense: 0, store: "サミット"}
        ],
        2: [
            {date: new Date("2021-01-08T00:00:00"), expense: 700, store: "サミット"},
            {date: new Date("2021-01-09T00:00:00"), expense: 600, store: "サミット"},
            {date: new Date("2021-01-10T00:00:00"), expense: 3200, store: "サミット"},
            {date: new Date("2021-01-11T00:00:00"), expense: 1300, store: "サミット"},
            {date: new Date("2021-01-12T00:00:00"), expense: 1450, store: "サミット"},
            {date: new Date("2021-01-13T00:00:00"), expense: 2500, store: "サミット"},
            {date: new Date("2021-01-14T00:00:00"), expense: 500, store: "サミット"}
        ],
        3: [
            {date: new Date("2021-01-15T00:00:00"), expense: 900, store: "サミット"},
            {date: new Date("2021-01-16T00:00:00"), expense: 1100, store: "サミット"},
            {date: new Date("2021-01-17T00:00:00"), expense: 1250, store: "サミット"},
            {date: new Date("2021-01-18T00:00:00"), expense: 0, store: "サミット"},
            {date: new Date("2021-01-19T00:00:00"), expense: 400, store: "サミット"},
            {date: new Date("2021-01-20T00:00:00"), expense: 0, store: "サミット"},
            {date: new Date("2021-01-21T00:00:00"), expense: 500, store: "サミット"}
        ],
        4: [
            {date: new Date("2021-01-22T00:00:00"), expense: 1000, store: "サミット"},
            {date: new Date("2021-01-23T00:00:00"), expense: 1100, store: "サミット"},
            {date: new Date("2021-01-24T00:00:00"), expense: 1200, store: "サミット"},
            {date: new Date("2021-01-25T00:00:00"), expense: 1300, store: "サミット"},
            {date: new Date("2021-01-26T00:00:00"), expense: 1400, store: "サミット"},
            {date: new Date("2021-01-27T00:00:00"), expense: 1500, store: "サミット"},
            {date: new Date("2021-01-28T00:00:00"), expense: 2500, store: "サミット"}
        ],
        5: [
            {date: new Date("2021-01-29T00:00:00"), expense: 0, store: "サミット"},
            {date: new Date("2021-01-30T00:00:00"), expense: 0, store: "サミット"},
            {date: new Date("2021-01-31T00:00:00"), expense: 0, store: "サミット"},
            {date: new Date("2021-02-01T00:00:00"), expense: 0, store: "サミット"},
            {date: new Date("2021-02-02T00:00:00"), expense: 0, store: "サミット"},
            {date: new Date("2021-02-03T00:00:00"), expense: 1200, store: "サミット"},
            {date: new Date("2021-02-04T00:00:00"), expense: 0, store: "サミット"}
        ]
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
                    Object.keys(sampleData).map((weekIndex => {
                        return (
                                <CalendarRow rowData={sampleData[weekIndex]}></CalendarRow>
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