import { FC } from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import { RootState } from "../../../store/store";

export interface ICastData {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}

interface ICast {
    data: ICastData[];
    loading: boolean | null | string;
}

const Cast: FC<ICast> = ({ data, loading }) => {
    const { url } = useSelector((state:RootState) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="listItems">
                        {data?.map((item: ICastData) => {
                            const imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
                            return (
                                <div className="listItem" key={item.id}>
                                    <div className="profileImg">
                                        <Img src={imgUrl}/>
                                    </div>
                                    <div className="name">
                                        {item.name}
                                    </div>
                                    <div className="character">
                                        {item.character}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;