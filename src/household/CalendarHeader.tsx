const CalendarHeader: React.FC = () => {
    const headerItems = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <>
            {
                headerItems.map(item => <div className={`header-item ${item === 'Sun' ? 'sun' : ''} ${item === 'Sat' ? 'sat' : ''}`}>{item}</div>)

            }
        </>
    )
}

export default CalendarHeader;