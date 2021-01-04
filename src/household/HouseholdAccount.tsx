import { faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import './HouseholdAccount.scss';
import ReceiptTitle from './ReceiptTitle';
import ReceiptTag from './ReceiptTag';
import * as React from 'react';

const HouseholdAccount: React.FC = () => {
    const [tag, setTag] = React.useState<{id: number}[]>([]);
    const addReceiptDisabled = tag.length === 4;

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
            </div>
            <div className="receipt">
                <ReceiptTitle />
                <div className="input-part">
                    {
                        tag.map(_ => <ReceiptTag index={_.id} onChange={onTagChange}/>)
                    }
                    <Button className="add-receipt" disabled={addReceiptDisabled} onClick={onClick}><FontAwesomeIcon icon={faPlus}/>レシートを追加</Button>
                </div>
                <div style={{height:"10%", display:"flex"}}>
                    <Button style={{marginTop:8, fontWeight:600, border:"1px solid #9E9E9E", borderRadius:8, background:"#FAFAFA"}}><FontAwesomeIcon icon={faShoppingCart}/>登録</Button>
                </div>
            </div>
        </div>
    )
}

export default HouseholdAccount;