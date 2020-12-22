import React from 'react';
import { faCalculator, faSearchDollar, faInbox, faCog } from '@fortawesome/free-solid-svg-icons';
import AppMenuButton from './AppMenuButton';

const AppMenu: React.FC = () => {
    return (
        <div className="menu-root">
            <AppMenuButton className="menu-item selected" icon={faCalculator}>家計簿</AppMenuButton>
            <AppMenuButton className="menu-item" icon={faSearchDollar}>家計分析</AppMenuButton>
            <AppMenuButton className="menu-item" icon={faInbox}>冷蔵庫</AppMenuButton>
            <AppMenuButton className="menu-item" icon={faCog}>設定</AppMenuButton>
        </div>
    )
}

export default AppMenu;