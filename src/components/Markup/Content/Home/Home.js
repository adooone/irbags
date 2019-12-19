// import PropTypes from 'prop-types';
// import classnames from 'classnames';

import { homeImgWinter } from '../../../../constants/imagesLinks';
import IrButton from '../../../Helpers/IrButton/IrButton';

const Home = () => {
    return (
        <div className='Home'>
            <div className='label'>
                <div className='caption'>Handmade bags</div>
                <div className='info'>Beautiful handmade bags made with love special for you.</div>
                <div className='inspired'>Inspred by nature…</div>
                <IrButton>Go to store</IrButton>
            </div>
            <img className='home_image' src={homeImgWinter} alt='homeimg' />
        </div>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
