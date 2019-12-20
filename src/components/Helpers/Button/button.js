import PropTypes from 'prop-types';
// import classnames from 'classnames';

import { circlesrc } from '../../../constants/imagesLinks';

const Button = ({ children }) => {
    return (
        <button type='button' className='Button'>
            <div className='btntext'>{children}</div>
            <div className='btncircle'>
                <img src={circlesrc} alt='circle' />
            </div>
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
};

Button.defaultProps = {
    children: '',
};

export default Button;
