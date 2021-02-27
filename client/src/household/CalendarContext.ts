import * as React from 'react';

type CalendarContext = {
    targetDate: Date;
    setTargetDate: (date: Date) => void;
};

const defaultCalendarContext: CalendarContext = {
    targetDate: new Date(),
    setTargetDate: () => { }
};

export const calendarContext = React.createContext<CalendarContext>(defaultCalendarContext);

export const useCalendar = (): CalendarContext => {
    const [targetDate, setDate] = React.useState(new Date());
    const setTargetDate = React.useCallback((current: Date) => {
        setDate(current);
    }, []);
    return {
        targetDate,
        setTargetDate
    }
}