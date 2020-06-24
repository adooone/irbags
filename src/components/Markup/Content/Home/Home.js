import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';

import { homeImgSpring } from '../../../../constants/imagesLinks';
import IrButton from '../../../Helpers/IrButton/IrButton';
import HomeCanvas from './canvas';
import { MENU_STORE } from '../../../../constants/menuConsts';
import useGlobal from '../../../../hooks/store';

const Home = () => {
    const [, actions] = useGlobal();
    const didMount = () => {
        HomeCanvas.start();
    };

    useEffect(didMount, []);

    return (
        <div className='Home'>
            <div className='home_image'>
                <img src={homeImgSpring} alt='homeimg' />
            </div>
            <div className='label'>
                <div className='caption'>Крафтові сумки</div>
                <div className='info'>Такі класні та файні. Дітям та дорослим, в школу чи в магазин, та просто для гарного настрою.</div>
                <div className='inspired'>Запрошуємо…</div>
                <IrButton onClick={() => actions.selectMenu(MENU_STORE)}>Завітати</IrButton>
            </div>
        </div>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
