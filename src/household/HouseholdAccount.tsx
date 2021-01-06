import { faChevronLeft, faChevronRight, faPiggyBank, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton } from '@material-ui/core';
import './HouseholdAccount.scss';
import ReceiptTitle from './ReceiptTitle';
import ReceiptTag from './ReceiptTag';
import * as React from 'react';

const HouseholdAccount: React.FC = () => {
    const [tag, setTag] = React.useState<{id: number}[]>([]);
    const cannotAddReceipt = tag.length === 4;
    const cannotSelectNoMoneyDay = tag.length !== 0;
    const cannotRegisterReceipt = tag.length === 0;

    function onClick() {
        setTag([...tag, { id: tag.length + 1 }]);
    }

    function onTagChange(index: number) {
        const newTag = tag.filter((_) => {
            return _.id !== index;
        });
        setTag(newTag);
    }

    return (
        <div className="household-root">
            <div className="calendar">
                <div style={{padding:"0 10px", margin:"0 20px 0 0", height:"10%", display:"flex", alignItems:"center",justifyContent: "left", fontSize:26, fontWeight:900}}>
                    <div style={{color:"#333333"}}>January</div>
                    <div style={{margin: "0 8px", color:"#4DB6AC"}}>2021</div>
                    <IconButton><FontAwesomeIcon icon={faChevronLeft}/></IconButton>
                    <IconButton><FontAwesomeIcon icon={faChevronRight}/></IconButton>
                </div>
            </div>
            <div className="receipt">
                <ReceiptTitle />
                <div className="input-part">
                    {
                        tag.map(_ => <ReceiptTag index={_.id} onChange={onTagChange}/>)
                    }
                    <Button className="add-receipt" disabled={cannotAddReceipt} onClick={onClick}><FontAwesomeIcon className="add-icon" icon={faPlus}/>レシートを追加</Button>
                </div>
                <div className="register-part">
                    <Button className="register-receipt" disabled={cannotRegisterReceipt} fullWidth><FontAwesomeIcon className="register-icon" icon={faShoppingCart}/>登録</Button>
                </div>
                <div className="nomoney-part">
                    <Button className="register-nomoney" disabled={cannotSelectNoMoneyDay} fullWidth><FontAwesomeIcon className="register-icon" icon={faPiggyBank}/>NoマネーDAYにする</Button>
                </div>
            </div>
        </div>
    )
}

export default HouseholdAccount;