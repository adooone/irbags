import PropTypes from 'prop-types';
import classnames from 'classnames';

import useGlobal from '../../../../../../hooks/store';

const ListMode = ({ items }) => {
    const [store, actions] = useGlobal();

    return (
        <div className='nav_list'>
            {_.map(items, (item, i) => (
                <div
                    className={classnames('nav_item', { selected: (store.selectedBag || 0) === i })}
                    onClick={() => actions.selectBag(i)}
                    role='presentation'
                    key={i}
                >
                    <div className='nav_image'><img src={item.img} alt='navimg' /></div>
                    <div className='nav_info'>
                        <div className='nav_caption'>{item.caption}</div>
                        <div className='nav_price'>
                            <strong>
                                {item.price}
                                {' '}
                            </strong>
                                гривень
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

ListMode.propTypes = {
    items: PropTypes.array,
    // handleClick: PropTypes.func,
};

ListMode.defaultProps = {
    items: [],
    // handleClick: () => {},
};

export default ListMode;
