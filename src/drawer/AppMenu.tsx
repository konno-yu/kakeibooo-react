import { AppMenuButtonProps } from 'drawer/AppMenuButton';
import React, { ReactElement } from 'react';

interface AppMenuProps {
    children: ReactElement<AppMenuButtonProps>[];
    value: string;
    onChange: (newValue: string) => void
}

const AppMenu: React.FC<AppMenuProps> = (props: AppMenuProps) => {
    function handleChange(newValue: string) {
        props.onChange(newValue);
    }
    return (
        <div className="menu-root">
            {
                props.children.map(menuButton => {
                    if(menuButton.props.value === props.value) {
                        return React.cloneElement(menuButton, { className: "menu-item selected", onChange: handleChange });
                    }
                    return React.cloneElement(menuButton, { onChange: handleChange });
                })
            }
        </div>
    )
}

export default AppMenu;