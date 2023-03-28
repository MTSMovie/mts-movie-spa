import React from 'react';
import clCommon from "./core/styles/_Text32.module.scss";
import TextM from "../core/text/medium/TextM";

const Text32M = ({className, children, ...props}) => {
    return <TextM className={[className, clCommon.text].join(" ")} {...props}>{children}</TextM>
};

export default Text32M;