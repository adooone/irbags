import PropTypes from 'prop-types';
// import Button from '../../../../../Helpers/Button/button';
// import classnames from 'classnames';

const GridMode = ({ items }) => {
    return (
        <div className='nav_grid'>
            {_.map(items, (item, i) => (
                <div key={i} className='nav_item'>
                    <div className='nav_image'><img src={item.img} alt='navimg' /></div>
                    <div className='nav_info'>
                        <div className='nav_caption'>{item.caption}</div>
                        <div className='nav_price'>{item.price}</div>
                    </div>
                    <div className='nav_show_tools'>
                        <div className='label'>Переглянути</div>
                        {/* <Button icon>shopping-bag</Button> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

GridMode.propTypes = {
    items: PropTypes.array,
};

GridMode.defaultProps = {
    items: [],
};

export default GridMode;
