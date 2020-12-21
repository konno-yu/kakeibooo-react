import React from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faSearchDollar, faInbox, faCog } from '@fortawesome/free-solid-svg-icons';

const AppMenu: React.FC = () => {
    return (
        <div className="menu-root">
            <Button size="large" className="menu-item" variant='contained' disableElevation startIcon={<FontAwesomeIcon icon={faCalculator}/>}>家計簿</Button>
            <Button size="large" className="menu-item" variant='contained' disableElevation startIcon={<FontAwesomeIcon icon={faSearchDollar}/>}>家計分析</Button>
            <Button size="large" className="menu-item" variant='contained' disableElevation startIcon={<FontAwesomeIcon icon={faInbox}/>}>冷蔵庫</Button>
            <Button size="large" className="menu-item" variant='contained' disableElevation startIcon={<FontAwesomeIcon icon={faCog}/>}>設定</Button>
        </div>
    )
}

export default AppMenu;