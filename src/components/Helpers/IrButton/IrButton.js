import PropTypes from 'prop-types';
import classnames from 'classnames';
import { brushsrc } from '../../../constants/imagesLinks';


const IrButton = (props) => {
    const { children, small } = props;
    return (
        <div
            className={classnames('IrButton', { small })}
        >
            <div className='btnbackground'>
                <img src={brushsrc} alt='src' />
            </div>
            <div className='btntext'>{children}</div>
        </div>
    );
};

IrButton.propTypes = {
    children: PropTypes.string.isRequired,
    small: PropTypes.bool,
};

IrButton.defaultProps = {
    small: false,
};

export default IrButton;
