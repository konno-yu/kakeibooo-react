interface CalendarRowProps {
    rowData: {date: Date, expense: number, store: string}[]
}

const CalendarRow: React.FC<CalendarRowProps> = (props: CalendarRowProps) => {
    return(
        <div className="row">
            {
                props.rowData.map(day => {
                    return (
                        // TODO Date単位のコンポーネントに分割
                        <div className="row-data">
                            <div className="date">{day.date.getDate()}</div>
                            <div className="expense">¥{day.expense}</div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CalendarRow;