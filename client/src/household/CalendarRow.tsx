import CalendarDate from "./ CalendarDate";

interface CalendarRowProps {
    rowData: { date: Date | '', expense: number }[]
}

const CalendarRow: React.FC<CalendarRowProps> = (props: CalendarRowProps) => {
    return(
        <div className="row">
            {
                props.rowData.map(dayData => {
                    return (
                        <div className="row-data">
                            <CalendarDate data={dayData}/>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CalendarRow;