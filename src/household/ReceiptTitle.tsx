import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReceiptTitle: React.FC = () => {
    return (
        <div className="title">
            <FontAwesomeIcon size="lg" icon={faPiggyBank} style={{color: "#EEEEEE"}}/>
            2020-12-30
        </div>
    )

}

export default ReceiptTitle;