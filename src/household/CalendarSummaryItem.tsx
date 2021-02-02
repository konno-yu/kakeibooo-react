import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from "react";

interface CalendarSummaryItemProps {
    label: string;
    icon: IconDefinition;
    children: string | ReactNode;
}

const CalendarSummaryItem: React.FC<CalendarSummaryItemProps> = (props: CalendarSummaryItemProps) => {
    return (
        <div className="item">
            <div className="icon">
                <FontAwesomeIcon color="#FAFAFA" size="2x" icon={props.icon}></FontAwesomeIcon>
            </div>
            <div className="contents">
                <div className="label">{props.label}</div>
                <div className="value">{props.children}</div>
            </div>
        </div>
    )
}

export default CalendarSummaryItem;