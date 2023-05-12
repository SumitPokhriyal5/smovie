import './style.scss';
import { ReactNode, FC } from 'react';

interface ContentWrapperProps {
    children: ReactNode
}

const ContentWrapper: FC<ContentWrapperProps> = ({children}) => {
    return <div className='contentWrapper'>
        {children}
    </div>
}

export default ContentWrapper;