import CalendarDate from "./ CalendarDate";

interface CalendarRowProps {
    rowData: {date: Date, expense: number, store: string}[]
}

const CalendarRow: React.FC<CalendarRowProps> = (props: CalendarRowProps) => {
    return(
        <div className="row">
            {
                props.rowData.map(day => {
                    return (
                        <div className="row-data">
                            <CalendarDate date={day.date.getDate()} expense={day.expense}/>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CalendarRow;