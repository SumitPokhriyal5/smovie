import { useState , FC } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

interface IVideoData {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  }
interface IVideoSection {
    data :{
        id: number;
        results: IVideoData[]
    } | null;
    loading: boolean | string | null;
}

const VideosSection : FC<IVideoSection> = ({ data, loading }) => {
    const [show, setShow] = useState<string | boolean>(false);
    const [videoId, setVideoId] = useState<string | null>(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {data?.results?.map((video) => (
                            <div className="videoItem" key={video.id} onClick={() => {
                                setVideoId(video.key)
                                setShow(true)
                            }} >
                                <div className="videoThumbnail">
                                    <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                                    <PlayIcon />
                                </div>
                                <div className="videoTitle">
                                    {video.name}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;