import React from 'react';
import cl from "./_ButtonToDefault24B.module.scss"
import ButtonToDefault from "../core/ui/button/ButtonToDefault";
import Text24B from "../../../../text/24/Text24B";
import clCommon from "../../../core/styles/_ButtonCore.module.scss";

const ButtonToDefault24B = ({className, children, ...props}) => {
    return (
        <ButtonToDefault className={[className, cl.button].join(" ")} {...props}>
            <Text24B className={clCommon.title}>{children}</Text24B>
        </ButtonToDefault>
    )
};

export default ButtonToDefault24B;