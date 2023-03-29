import React from 'react';
import cl from "./_LinkCore.module.scss"
import {Link} from "react-router-dom";

const LinkCore = ({to, className, children, ...props}) => {
    return <Link className={[className, cl.link].join(" ")} {...props}>{children}</Link>
};

export default LinkCore;