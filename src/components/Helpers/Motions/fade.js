import PropTypes from 'prop-types';
import classnames from 'classnames';

const Fade = ({ children, className, open }) => {
    return (
        <div className={classnames('Fade', className, { hidden: !open })}>
            {children}
        </div>
    );
};

Fade.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    //
};

Fade.defaultProps = {};

export default Fade;
