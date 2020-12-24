import { Avatar } from "@material-ui/core";
import avatorPath from './account_icon_sample.svg';

const AppAccount: React.FC = () => {
    return(
        <div className="account-root">
            <Avatar src={avatorPath} style={{width:80, height:80, background:"#FFF"}} />
        </div>
    )
}

export default AppAccount;