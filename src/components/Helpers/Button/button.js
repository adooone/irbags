import {
    useRef,
    useEffect,
    useState,
} from 'react';
import PropTypes from 'prop-types';
// import { Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import mojs from '@mojs/core';
import classnames from 'classnames';

// import { circlesrc } from '../../../constants/imagesLinks';

const Button = ({
    children, icon, onClick, selected,
}) => {
    const buttonRef = useRef(null);

    const [btnPos, setPos] = useState({});
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const position = buttonRef.current.getBoundingClientRect();
        const btnX = position.x;
        if (btnX !== btnPos) setPos(btnX);
    });
    const onBtnClick = () => {
        setClicked(true);
        onClick();
        setTimeout(() => { setClicked(false); }, icon ? 200 : 1000);
        // console.log(e.pageX);
    };

    const renderIconBtn = () => (
        <>
            <FontAwesomeIcon icon={children} />
            <div className='iconncircle' />
        </>
    );
    const renderTextBtn = () => (
        <>
            <div className='btntext'>{children}</div>
            <div className='btncircle' />
        </>
    );
    return (
        <button
            ref={buttonRef}
            type='button'
            className={classnames('Button', { clicked, selected, icon })}
            onFocus={() => { }}
            onClick={onBtnClick}
        >
            {
                icon
                    ? renderIconBtn()
                    : renderTextBtn()
            }
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    icon: PropTypes.bool,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
};

Button.defaultProps = {
    children: '',
    icon: false,
    onClick: () => {},
    selected: false,
};

export default Button;
