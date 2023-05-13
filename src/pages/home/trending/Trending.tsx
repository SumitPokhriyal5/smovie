import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {
  const [endpoint, setEndpoint] = useState<'day' | 'week'>('day');
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const isLoading = Boolean(loading); // Convert loading to a boolean

  const onTabChange = (tab: string, index: number): void => {
    setEndpoint(tab === 'Day' ? 'day' : 'week');
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={isLoading} /> // Use the converted isLoading value
    </div>
  );
};

export default Trending;
