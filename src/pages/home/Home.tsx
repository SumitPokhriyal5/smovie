import React from 'react';
import "./style.scss";

import HeroBanner from './heroBanner/HeroBanner';

type Props = {}

function Home({}: Props) {
  return (
    <div className='homePage'>
        <HeroBanner/>
    </div>
  )
}

export default Home