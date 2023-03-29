import React from 'react';
import cl from './_PreviewMovieWindow.module.scss'
import {getImage} from "../../../../core/api/mainAPI";
import Text32M from "../../../../core/ui/text/32/Text32M";
import ButtonToExpansion20Bl from "../../../../core/ui/button/to/expansion/20/ButtonToExpansion20Bl";
import Text20Bl from "../../../../core/ui/text/20/Text20Bl";
import {getPlayerMovieURL} from "../../../../core/service/urls";

const PreviewMovieWindow = ({moveId, title, titleImage, posterHorizontalWithoutText, description, year, genres, country,
                                ageLimit, className, ...props}) => {
    return (
        <div className={cl.block} {...props}>
            <div className={cl.background}>
                <div className={cl.backgroundDark} />
                <img src={getImage(posterHorizontalWithoutText)} className={cl.backgroundImage}  alt="Постер"/>
            </div>
            <div className={cl.content}>
                <img src={getImage(titleImage)} className={cl.titleImage}  alt={title}/>
                <Text32M className={cl.description}>{description}</Text32M>
                <ButtonToExpansion20Bl to={getPlayerMovieURL(moveId)} className={cl.button}>Смотреть</ButtonToExpansion20Bl>
            </div>
            <Text20Bl className={cl.other}>{`${year} | ${genres.join(", ")} | ${country.join(", ")} | ${ageLimit}+`}</Text20Bl>
        </div>
    );
};

export default PreviewMovieWindow;