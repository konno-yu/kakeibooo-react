import { faMapMarkerAlt, faTrash, faYenSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton, InputBase } from "@material-ui/core"
import * as React from 'react';

interface ReceiptTagProps {
    data: { id: number, storeName: string, expense: string };
    onChange: (index, value, target) => void;
    onDelete: (index) => void;
}

const ReceiptTag: React.FC<ReceiptTagProps> = (props: ReceiptTagProps) => {
    function onClickDelete() {
        props.onDelete(props.data.id);
    }
    function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, target: "store" | "expense") {
        props.onChange(props.data.id, (event.target as HTMLInputElement).value, target)
    }

    return (
        <div className="tag">
            <div className="left">
                <div className="punch-hole"></div>
            </div>
            <div className="center">
                <div className="store-name">
                    <FontAwesomeIcon className="input-icon" icon={faMapMarkerAlt}/>
                    <InputBase value={props.data.storeName} onChange={(event) => onChange(event, "store")} margin="dense" className="input" />
                </div>
                <div className="food-expense">
                    <FontAwesomeIcon className="input-icon" icon={faYenSign}/>
                    <InputBase value={props.data.expense} onChange={(event) => onChange(event, "expense")} margin="dense" className="input" />
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