import { Avatar } from "@material-ui/core";
import avatorPath from './account_icon_sample.svg';

const AppAccount: React.FC = () => {
    return(
        <div className="account-root">
            <div className="account-image">
                <Avatar src={avatorPath} className="avatar" />
            </div>
            <div className="username">こんの</div>
        </div>
    )
}

export default AppAccount;