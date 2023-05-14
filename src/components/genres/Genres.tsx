import {FC} from 'react';
import { useSelector } from 'react-redux';

import "./style.scss";
import { RootState } from '../../store/store';
interface IGenres {
    data: number[]
}

const Genres: FC<IGenres> = ({data}) => {
    const { genres } = useSelector((state:RootState) => state.home)
  return (
    <div className='genres'>
        {data?.map((g:number) => {
            if(!genres[g]?.name) return;
            return (
                <div className="genre" key={g}>
                    {genres[g]?.name.toString()}
                </div>
            )
        })}
    </div>
  )
}

export default Genres