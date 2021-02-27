import React from 'react';
// import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

const AppIcon: React.FC = () => {
    return (
        <div className="icon-root">
            <FontAwesomeIcon className="icon" icon={faPiggyBank}/>Kakeibooo
        </div>
    )
}

export default AppIcon;