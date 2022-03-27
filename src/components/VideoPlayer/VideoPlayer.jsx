import React, { useEffect, useRef, useState } from 'react';
import PlayPause from './icons/PlayPause';
import VolumeIcon from './icons/VolumeIcon';
import "./_video.scss"
const Videoplayer = ({ src, ...props }) => {
    const videoRef = useRef()
    const [playing, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(3)
    useEffect(() => {
        if (playing) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
            
        }
    }, [playing])

    const handleChangeRange = (e) => {
        setCurrentTime(e.target.value)
    }
    useEffect(() => {
        console.log(volume)
    }, [volume])
    useEffect(() => {
        // videoRef.current.currentTime = 100
        videoRef.current.currentTime = Math.round(duration * currentTime / 100)
    }, [currentTime, duration])

    useEffect(() => {
        videoRef.current.volume = volume/7
    }, [volume])

    const handleLoadMetaData = (e) => {
        setDuration(e.target.duration)
    }
    return (
       <div className='videoplayer'>
            <div className='container video'>
            <div onClick={() => {setPlaying(state => !state)}} className='video__controls'>
                <PlayPause className="controls__playPause" play={playing} />                
                <div className='video__controls__toolbar toolbar'>
                    <div className='toolbar__seekbar'>
                        <input onChange={handleChangeRange} className='toolbar__seekbar__input' type="range"></input>
                        <div className='toolbar__seekbar__range'>
                            <div style={{width:`${currentTime}%`}} className='toolbar__seekbar__range__inner'></div>
                        </div>
                    </div>
                    <div className='toolbar__buttons'>
                        <div className='toolbar__buttons__volume volume'>
                            <VolumeIcon volume={volume} />
                            <div className='volume__slider'>
                                <div className='volume__slider__range'>
                                    <div style={{width:`${volume*100/7}%`}} className='volume__slider__range__inner'></div>
                                </div>
                                <input min={0} className="volume__slider__input" max={7} value={Number(volume)} onChange={(e) =>{setVolume(Number(e.target.value))}} type="range" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <video className='video-box' onLoadedMetadata={handleLoadMetaData} ref={videoRef} src={src} {...props}></video>
        </div>
       </div>
    );
}

export default Videoplayer;
