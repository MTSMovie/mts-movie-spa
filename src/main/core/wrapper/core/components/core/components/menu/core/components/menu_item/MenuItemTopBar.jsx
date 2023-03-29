import React from 'react';
import cl from './_MenuItemTopBar.module.scss'
import LinkOutline from "../../../../../../../../../../../core/ui/link/outline/LinkOutline";

const MenuItemTopBar = ({to, title, className, activeId, ...props}) => {
    return (
        <LinkOutline to={to} className={[className, activeId ? cl.active : ''].join(" ")} {...props}>{title}</LinkOutline>
    );
};

export default MenuItemTopBar;