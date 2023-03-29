import React from 'react';
import cl from './_MenuTopBar.module.scss'
import MenuItemTopBar from "./core/components/menu_item/MenuItemTopBar";

const MenuTopBar = ({menu, activeId, className, ...props}) => {
    return (
        <div className={className} {...props}>
            {menu.map((item) =>
                <MenuItemTopBar className={cl.menuItem}
                                to={item.path}
                                key={item.id}
                                activeId={activeId === item.id}
                                title={item.title}/>
            )}
        </div>
    );
};

export default MenuTopBar;