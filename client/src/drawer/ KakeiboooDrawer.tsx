import * as React from 'react';
import AppIcon from './AppIcon';
import AppMenu from './AppMenu';
import AppMenuButton from './AppMenuButton'
import AppAccount from './AppAccount';
import { faCalculator, faSearchDollar, faInbox, faCog } from '@fortawesome/free-solid-svg-icons';


const KakeiboooDrawer: React.FC = () => {
    const [value, setValue] = React.useState("household");

    function handleChange(newValue) {
      setValue(newValue);
    }

    return(
        <div className="drawer">
          <AppIcon />
          <AppMenu value={value} onChange={handleChange}>
            <AppMenuButton value="household" link="/household" className="menu-item" icon={faCalculator}>家計簿</AppMenuButton>
            <AppMenuButton value="analysis" link="analysis" className="menu-item" icon={faSearchDollar}>分析</AppMenuButton>
            <AppMenuButton value="foodstaff" link="foodstaff" className="menu-item" icon={faInbox}>冷蔵庫</AppMenuButton>
            <AppMenuButton value="setting" link="setting" className="menu-item" icon={faCog}>設定</AppMenuButton>
          </AppMenu>
          <AppAccount />
        </div>
    )
}

export default KakeiboooDrawer;