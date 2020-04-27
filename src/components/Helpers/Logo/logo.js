import PropTypes from 'prop-types';
import { minlogosrc } from '../../../constants/imagesLinks';

// import classnames from 'classnames';

const Logo = (props) => {
    const { size } = props;
    return (
        <div className='Logo'>
            <img height={size} src={minlogosrc} alt='logo' />
        </div>
    );
};

Logo.propTypes = {
    size: PropTypes.number,
    //
};

Logo.defaultProps = {
    size: 36,
    //
};

export default Logo;
