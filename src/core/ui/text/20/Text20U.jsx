import React from 'react';
import clCommon from "./core/styles/_Text20.module.scss";
import TextU from "../core/text/ultra/TextU";

const Text20U = ({className, children, ...props}) => {
    return <TextU className={[className, clCommon.text].join(" ")} {...props}>{children}</TextU>
};

export default Text20U;