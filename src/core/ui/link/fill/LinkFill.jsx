import React from 'react';
import LinkCore from "../core/ui/LinkCore";
import cl from "./_LinkFill.module.scss";

const LinkFill = ({to, className, children, ...props}) => {
    return <LinkCore to={to} className={[className, cl.link].join(" ")} {...props}>{children}</LinkCore>
};

export default LinkFill;