import React from 'react';
import clCommon from "./core/styles/_Text20.module.scss";
import TextBl from "../core/text/black/TextBl";

const Text20Bl = ({className, children, ...props}) => {
    return <TextBl className={[className, clCommon.text].join(" ")} {...props}>{children}</TextBl>
};

export default Text20Bl;