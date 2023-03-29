import React, {useState} from 'react';
import cl from './_ControlsPlayer.module.scss'
import play from '../../../../../../../core/static/img/play.svg'
import pause from '../../../../../../../core/static/img/pause.svg'
import specialFeatures from '../../../../../../../core/static/img/special-features.svg'

const ControlsPlayer = ({handlePlay, playing, className, ...props}) => {

    return (
        <div className={[cl.block, className].join(" ")}>
            <img className={cl.play} src={playing ? pause : play} alt="play" onClick={handlePlay}/>
            <div className={cl.bottom}>
                <div className={cl.right}>

                </div>
            </div>
        </div>
    );
};

export default ControlsPlayer;