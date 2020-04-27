import PropTypes from 'prop-types';
import classnames from 'classnames';
import { brushsrc } from '../../../constants/imagesLinks';


const IrButton = (props) => {
    const {
        children, small, className, onClick,
    } = props;
    return (
        <div
            className={classnames('IrButton', { small }, className)}
            onClick={onClick}
            role='presentation'
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
    className: PropTypes.string,
    onClick: PropTypes.func,
};

IrButton.defaultProps = {
    small: false,
    className: '',
    onClick: () => {},
};

export default IrButton;
