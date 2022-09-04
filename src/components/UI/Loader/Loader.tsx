import {memo} from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {

    return (
        <DotLoader
            
            size={120}
            speedMultiplier={1}
            cssOverride={{
                left: 'calc(50% - 60px)',
            }}
        />
    )
}

export default memo(Loader);