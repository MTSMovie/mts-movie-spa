import React from 'react';
import cl from './_Page404.module.scss'
import H1 from "../core/ui/title/H1/H1";
import H3 from "../core/ui/title/H3/H3";
import Text24M from "../core/ui/text/24/Text24M";
import ButtonToDefault18Bl from "../core/ui/button/to/default/18/ButtonToDefault18Bl";

const Page404 = () => {
    return (
        <div className={cl.page}>
            <div className={cl.text}>
                <H3>(×_×)</H3>
                <H1 className={cl.title}>404.</H1>
                <Text24M>Такой страницы не существует :(</Text24M>
            </div>
            <ButtonToDefault18Bl to={'/'}>Вернуться к фильмам</ButtonToDefault18Bl>
        </div>
    );
};

export default Page404;