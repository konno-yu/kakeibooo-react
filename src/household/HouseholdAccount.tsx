import { faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import './HouseholdAccount.scss';
import ReceiptTitle from './ReceiptTitle';
import ReceiptTag from './ReceiptTag';

const HouseholdAccount: React.FC = () => {
    return (
        <div className="household-root">
            <div className="calendar">
                bb
            </div>
            <div className="receipt">
                <ReceiptTitle/>
                <div className="input-form">
                    <ReceiptTag/>
                    <ReceiptTag/>
                    <Button style={{marginTop:8, fontWeight:600}}><FontAwesomeIcon icon={faPlus}/>レシートを追加</Button>
                </div>
                <div style={{height:"10%", display:"flex"}}>
                    <Button style={{marginTop:8, fontWeight:600, border:"1px solid #9E9E9E", borderRadius:8, background:"#FAFAFA"}}><FontAwesomeIcon icon={faShoppingCart}/>登録</Button>
                </div>
            </div>
        </div>
    )
}

export default HouseholdAccount;