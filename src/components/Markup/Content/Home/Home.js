import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';

import { homeImgWinter } from '../../../../constants/imagesLinks';
import IrButton from '../../../Helpers/IrButton/IrButton';
import HomeCanvas from './canvas';
// import useGlobal from '../../../../hooks/store';

const Home = () => {
    // const [store, actions] = useGlobal();
    const didMount = () => {
        HomeCanvas.start();
    };

    useEffect(didMount, []);

    return (
        <div className='Home'>
            <div className='home_image'>
                <img src={homeImgWinter} alt='homeimg' />
            </div>
            <div className='label'>
                <div className='caption'>Handmade bags</div>
                <div className='info'>Beautiful handmade bags made with love special for you.</div>
                <div className='inspired'>Inspred by nature…</div>
                <IrButton>Go to store</IrButton>
            </div>
            <div id='radial_g' />
            <canvas id='home_canvas' />
        </div>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
