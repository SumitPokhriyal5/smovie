import React, { useRef } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import ContentWrapper from '../contentWrapper/ContentWrapper';
import Img from '../lazyLoadImage/Img';
import PosterFallback from '../../assets/no-poster.png';

import './style.scss';
import { RootState } from '../../store/store';
import { IMovies } from '../../typescript/Results';

interface CarouselProps {
  data: IMovies[] | undefined;
  loading: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ data, loading }) => {
  const carouselContainer = useRef<HTMLDivElement>(null);
  const { url } = useSelector((state: RootState) => state.home);
  const navigate = useNavigate();

  const navigation = (dir: 'left' | 'right') => {
    // Implementation for navigating carousel
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation('left')}
        />

        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation('right')}
        />
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item: IMovies) => {
              const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
              return (
                <div className="carouselItem" key={item.id}>
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>

                    <span className="date">{dayjs(item.release_date).format('MMM D, YYYY')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
