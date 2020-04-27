import { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IrButton from '../../../../Helpers/IrButton/IrButton';
import BagCard from './BagCard';
// import PageView from './View';

const Bag = (props) => {
    const { data, onLoad } = props;
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={classnames('Bag', { expanded })}>
            <div className='preview'>
                <div className='image_info'>
                    <img onLoad={() => onLoad(true)} src={data.img} alt='img' />
                </div>
                <div className='info_group'>
                    <div className='caption_info'>{data.caption}</div>
                    <div className='text_info'>{data.info}</div>
                    <IrButton className='open_btn' onClick={handleClick}>Хочу</IrButton>
                </div>
            </div>
            <BagCard open={expanded} />
        </div>
    );
};

Bag.propTypes = {
    // children: PropTypes.any,
    data: PropTypes.object,
    onLoad: PropTypes.func,
};

Bag.defaultProps = {
    // children: null,
    data: {},
    onLoad: () => {},
};

export default Bag;
