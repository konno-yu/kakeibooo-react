import CalendarTitle from './CalendarTitle';
import CalendarHeader from './CalendarHeader';
import './ExpenseCalendar.scss';
import CalendarRow from './CalendarRow';
import CalendarSummary from './CalendarSummary';
import * as DateFns from 'date-fns';
import { useContext, useEffect, useRef } from 'react';
import { calendarContext } from './CalendarContext';


type CalendarData = {
    date: Date | '';
    expense: number;
}

/**
 * 曜日と日付を考慮して月のカレンダー情報を構築する
 */
function createInitalCalendarData(targetDate: Date) {
    const calendarData: Record<string, CalendarData[]> = {};
    const today = targetDate;
    today.setHours(0,0, 0);
    const daysInMonth = DateFns.getDaysInMonth(today);
    for (let i = 1; i <= daysInMonth; i++) {
        const weekIndex = DateFns.getWeekOfMonth(DateFns.setDate(today, i));
        if (calendarData[weekIndex] === undefined) {
            calendarData[weekIndex] = Array<CalendarData>(7).fill({date: '', expense: -1});
        }
        calendarData[weekIndex][DateFns.getDay(DateFns.setDate(today, i))] = ({ date: DateFns.setDate(today, i), expense: 10 });
    }
    return calendarData;
}


const ExpenseCalendar: React.FC = () => {
    const context = useContext(calendarContext);
    const dateData: Record<string, CalendarData[]> = createInitalCalendarData(context.targetDate);
    const prevTargetDate = useRef<Date>();
    useEffect(() => {
        // TODO 日付の変更でもこのuseEffectを通ってしまっているので要カイゼン
        // TODO 月だけを保持する値を定義しないとむり？
        if (prevTargetDate.current && (prevTargetDate.current.getMonth() !== context.targetDate.getMonth())) {
            // 月が変わった時のみカレンダー情報の書き換えを実行する
            createInitalCalendarData(context.targetDate);
        }
        prevTargetDate.current = context.targetDate;
    }, [context.targetDate]);

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