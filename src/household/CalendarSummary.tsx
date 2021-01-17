import { faBalanceScale, faUtensils } from "@fortawesome/free-solid-svg-icons";
import CalendarSummaryItem from "./CalendarSummaryItem";

const CalendarSummary: React.FC = () => {
    return (
        <>
            <CalendarSummaryItem label="1日あたりの食費" icon={faUtensils}>¥1,200<span className="unit">/日</span></CalendarSummaryItem>
            <CalendarSummaryItem label="今月の残金" icon={faBalanceScale}>¥19,800</CalendarSummaryItem>
        </>
    )
}

export default CalendarSummary;