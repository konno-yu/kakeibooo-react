import Button from "@material-ui/core/Button";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export interface AppMenuButtonProps {
    children: string
    className: string;
    icon: IconDefinition;
    link: string;
    value: string;
    onChange?: (newValue: string) => void;
}

const AppMenuButton: React.FC<AppMenuButtonProps> = (props) => {
    function handleChange() {
        if(props.onChange) {
            return props.onChange(props.value);
        }
        return {};
    }
    return (
        <Link to={props.link} className="icon-text">
            <Button
                onClick={handleChange}
                className={props.className}
                size="large"
                variant="contained"
                disableElevation
                startIcon={<FontAwesomeIcon
                icon={props.icon}/>}
            >
                {props.children}
            </Button>
        </Link>
    );
}

export default AppMenuButton;