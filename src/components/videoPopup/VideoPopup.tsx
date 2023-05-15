import { FC, Dispatch, SetStateAction } from "react";
import ReactPlayer from "react-player/youtube";

import "./style.scss";

interface IVideoPopup {
    show: string | boolean;
    setShow: Dispatch<SetStateAction<string | boolean>>;
    videoId: string | null;
    setVideoId: Dispatch<SetStateAction<string | null>>;
}

const VideoPopup: FC<IVideoPopup> = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    playing={true}
                />
            </div>
        </div>
    );
};

export default VideoPopup;
