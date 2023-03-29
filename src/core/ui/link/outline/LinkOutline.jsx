import React from 'react';
import LinkCore from "../core/ui/LinkCore";
import cl from "./_LinkOutline.module.scss";

const LinkOutline = ({to, className, children, ...props}) => {
    return <LinkCore to={to} className={[className, cl.link].join(" ")} {...props}>{children}</LinkCore>
};

export default LinkOutline;