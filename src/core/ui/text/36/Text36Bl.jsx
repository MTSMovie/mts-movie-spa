import React from 'react';
import clCommon from "./core/styles/_Text36.module.scss";
import TextBl from "../core/text/black/TextBl";

const Text36Bl = ({className, children, ...props}) => {
    return <TextBl className={[className, clCommon.text].join(" ")} {...props}>{children}</TextBl>
};

export default Text36Bl;