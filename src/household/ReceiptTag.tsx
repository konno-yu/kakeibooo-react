import { faMapMarkerAlt, faShoppingBasket, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton, InputBase } from "@material-ui/core"

const ReceiptTag: React.FC = () => {
    return (
        <div className="tag">
            <div className="left">
                <div className="punch-hole"></div>
            </div>
            <div className="center">
                <div className="store-name">
                    <FontAwesomeIcon className="input-icon" icon={faMapMarkerAlt}/>
                    <InputBase margin="dense" className="input" />
                </div>
                <div className="food-expense">
                    <FontAwesomeIcon className="input-icon" icon={faShoppingBasket}/>
                    <InputBase margin="dense" className="input" />
                </div>
            </div>
            <div className="right">
                <IconButton>
                    <FontAwesomeIcon className="trash-icon" size="xs" icon={faTrash}/>
                </IconButton>
            </div>
        </div>
    )
}

export default ReceiptTag;