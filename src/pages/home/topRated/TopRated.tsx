import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const TopRated = () => {
  const [endpoint, setEndpoint] = useState<'movie' | 'tv'>('movie');
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const isLoading = Boolean(loading); 

  const onTabChange = (tab: string): void => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={isLoading}
      endpoint={endpoint} /> 
    </div>
  );
};

export default TopRated;
