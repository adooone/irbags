import useGlobal from '../../../hooks/store';
import Fade from '../Motions/fade';
import { birdgif } from '../../../constants/imagesLinks';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const Loader = () => {
    const [store] = useGlobal();
    return (
        <Fade
            open={store.loading}
            className='Loader'
        >
            <img src={birdgif} alt='Loading' />
            <div className='load_text'>Loading...</div>
        </Fade>
    );
};

Loader.propTypes = {};

Loader.defaultProps = {};

export default Loader;
