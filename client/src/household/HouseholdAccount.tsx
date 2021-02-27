import { faPiggyBank, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import './HouseholdAccount.scss';
import ReceiptTitle from './ReceiptTitle';
import ReceiptTag from './ReceiptTag';
import ExpenseCalendar from './ExpenseCalendar';
import * as React from 'react';
import { calendarContext, useCalendar } from './CalendarContext';

// export const DateContext = React.createContext<[Date, React.Dispatch<React.SetStateAction<Date>>]>([new Date(), () => {}]);

const HouseholdAccount: React.FC = () => {
    const [tag, setTag] = React.useState<{id: number, storeName: string, expense: string}[]>([]);
    // const [date, setDate] = React.useState(new Date());
    const context = useCalendar();
    const cannotAddReceipt = tag.length === 4;
    const cannotSelectNoMoneyDay = tag.length !== 0;
    const cannotRegisterReceipt = tag.length === 0;

    function onTagAdd() {
        setTag([...tag, { id: tag.length + 1, storeName: '', expense: '' }]);
    }

    function onTagChange(id: number, value: string, target: "store" | "expense") {
        const newTag = tag.map(t => {
            if(t.id === id) {
                if(target === 'expense') t.expense = value;
                if(target === 'store') t.storeName = value;
            }
            return t;
        });
        setTag(newTag);
    }

    function onTagDelete(id: number) {
        const newTag = tag.filter(t => t.id !== id);
        newTag.forEach((t, i) => t.id = (i + 1));
        setTag(newTag);
    }

    function getSummation() {
        if(tag.length === 0) {
            return 0;
        }
        let s = 0;
        tag.forEach(t => {
            s += Number(t.expense);
        });
        return s;
    }

    return (
        <div className="household-root">
            <calendarContext.Provider value={context}>
                <ExpenseCalendar />
                <div className="receipt">
                    <ReceiptTitle />
                    <div className="input-part">
                        {
                            tag.map(_ => <ReceiptTag data={_} onChange={onTagChange} onDelete={onTagDelete}/>)
                        }
                        <Button className="add-receipt" disabled={cannotAddReceipt} onClick={onTagAdd}>
                            <FontAwesomeIcon className="add-icon" icon={faPlus}/>レシートを追加
                        </Button>
                    </div>
                    <div className="summation-part">
                        <div>合計</div>
                        <div className="value">{`¥${getSummation().toLocaleString()}`}</div>
                    </div>
                    <div className="register-part">
                        <Button className="register-receipt" disabled={cannotRegisterReceipt} fullWidth>
                            <FontAwesomeIcon className="register-icon" icon={faShoppingCart}/>登録
                        </Button>
                    </div>
                    <div className="nomoney-part">
                        <Button className="register-nomoney" disabled={cannotSelectNoMoneyDay} fullWidth>
                            <FontAwesomeIcon className="register-icon" icon={faPiggyBank}/>
                            NoマネーDAYにする
                        </Button>
                    </div>
                </div>
            </calendarContext.Provider>
        </div>
    )
}

export default HouseholdAccount;