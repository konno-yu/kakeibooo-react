import CalendarTitle from './CalendarTitle';
import CalendarHeader from './CalendarHeader';
import './ExpenseCalendar.scss';

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
                        sampleData.map(day => {
                            return(
                                <div style={{width:"10%", height:"100%", textAlign: "center", display:"flex", justifyContent:"space-around", flexDirection:"column", alignItems:"center"}}>
                                    <div style={{fontWeight:900, width:"30%", height:"20%", borderBottom:"3px solid #009688", padding:2}}>{day.date.getDate()}</div>
                                    <div>¥{day.expense}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default ExpenseCalendar;