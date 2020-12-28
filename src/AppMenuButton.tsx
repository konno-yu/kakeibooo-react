import Button from "@material-ui/core/Button";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    children: string
    className: string;
    icon: IconDefinition;
}

const AppMenuButton: React.FC<Props> = (props) => {
    return (
        <Button className={props.className} size="large" variant="contained" disableElevation startIcon={<FontAwesomeIcon icon={props.icon}/>}>
            {props.children}
        </Button>
    );
}

export default AppMenuButton;