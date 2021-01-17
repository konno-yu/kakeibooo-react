interface CalendarDateProps {
    date: number;
    expense: number;
}

const CalendarDate: React.FC<CalendarDateProps> = (props: CalendarDateProps) => {
    function getDateLabel() {
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
            <div className={`date ${getDateLabel()}`}>{props.date}</div>
            <div className="expense">¥{(props.expense).toLocaleString()}</div>
        </>
    );
}

export default CalendarDate;