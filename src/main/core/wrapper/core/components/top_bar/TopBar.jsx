import React from 'react';
import cl from "./_TopBar.module.scss";
import LogoMini from "../../../../../../core/ui/logo/mini/LogoMini";
import MenuTopBar from "../core/components/menu/MenuTopBar";
import ButtonToDefault18Bl from "../../../../../../core/ui/button/to/default/18/ButtonToDefault18Bl";


const TopBar = ({menu, activeId, className, ...props}) => {
    return (
        <div className={[cl.topBar, className].join(" ")} {...props}>
            <div className={cl.wrapper}>
                <LogoMini className={cl.logo} />
                <MenuTopBar menu={menu} activeId={activeId} className={cl.menu} />
                <ButtonToDefault18Bl className={cl.sign}>Войти</ButtonToDefault18Bl>
            </div>
        </div>
    );
};

export default TopBar;