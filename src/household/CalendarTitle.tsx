import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";

const CalendarTitle: React.FC = () => {
    return (
        <>
            <div className="month">January</div>
            <div className="year">2021</div>
            <IconButton><FontAwesomeIcon icon={faChevronLeft}/></IconButton>
            <IconButton><FontAwesomeIcon icon={faChevronRight}/></IconButton>
        </>
    )
}

export default CalendarTitle;