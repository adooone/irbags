import PropTypes from 'prop-types';
import { brushsrc } from '../../../constants/imagesLinks';

// import classnames from 'classnames';

const IrButton = (props) => {
    const { children } = props;
    return (
        <div className='IrButton'>
            <div className='btnbackground'>
                <img src={brushsrc} alt='src' />
            </div>
            <div className='btntext'>{children}</div>
        </div>
    );
};

IrButton.propTypes = {
    children: PropTypes.string.isRequired,
};

IrButton.defaultProps = {};

export default IrButton;
