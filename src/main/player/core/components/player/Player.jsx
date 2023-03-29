import React, {useState} from 'react';
import ReactPlayer from "react-player";
import ControlsPlayer from "./core/components/ControlsPlayer";
import cl from "./_Player.module.scss";


const Player = ({url, className, ...props}) => {
    const [playing, setPlaying] = useState(true)
    const handlePlay = () => {
        setPlaying(!playing)
    }
    return (
        <div className={cl.block}>
            <ReactPlayer url={url} playing={playing} controls={true} className={cl.player}/>
            {/*<ControlsPlayer handlePlay={handlePlay} playing={playing} />*/}
        </div>
    );
};

export default Player;