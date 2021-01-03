import { faMapMarkerAlt, faShoppingBasket, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton, InputBase } from "@material-ui/core"

interface ReceiptTagProps {
    index: number;
    onChange: (index) => void;
}

const ReceiptTag: React.FC<ReceiptTagProps> = (props: ReceiptTagProps) => {
    function onClickDelete() {
        props.onChange(props.index);
    }
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
                <IconButton onClick={onClickDelete}>
                    <FontAwesomeIcon className="trash-icon" size="xs" icon={faTrash}/>
                </IconButton>
            </div>
        </div>
    )
}

export default ReceiptTag;