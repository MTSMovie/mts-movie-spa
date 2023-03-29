import React from 'react';
import cl from "./_ButtonToDefault18Bl.module.scss"
import clCommon from "../../../core/styles/_ButtonCore.module.scss"
import Text18Bl from "../../../../text/18/Text18Bl";
import ButtonToDefault from "../core/ui/button/ButtonToDefault";

const ButtonToDefault18Bl = ({className, children, ...props}) => {
    return (
        <ButtonToDefault className={[className, cl.button].join(" ")} {...props}>
            <Text18Bl className={clCommon.title}>{children}</Text18Bl>
        </ButtonToDefault>
    )
};

export default ButtonToDefault18Bl;