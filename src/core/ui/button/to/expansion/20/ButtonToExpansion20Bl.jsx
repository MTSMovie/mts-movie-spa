import React from 'react';
import ButtonTo from "../../core/ui/button/ButtonTo";
import Text20Bl from "../../../../text/20/Text20Bl";
import cl from "./_ButtonToExpansion20Bl.module.scss"
import clCommon from "../../../core/styles/_ButtonCore.module.scss";

const ButtonToExpansion20Bl = ({className, children, ...props}) => {
    return (
        <ButtonTo className={[className, cl.button].join(" ")} {...props}>
            <Text20Bl className={clCommon.title}>{children}</Text20Bl>
        </ButtonTo>
    )
};

export default ButtonToExpansion20Bl;