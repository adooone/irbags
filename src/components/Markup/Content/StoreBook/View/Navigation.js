import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../../../Helpers/Button/button';
import { VIEW_MODE_LIST, VIEW_MODE_GALLARY } from '../../../../../constants/storeConsts';
import useGlobal from '../../../../../hooks/store';

const Navigation = ({ items }) => {
    const [store, actions] = useGlobal();

    const handleViewChange = (mode) => {
        actions.setViewMode(mode);
    };

    return (
        <div className={classnames('Navigation', { table: store.viewMode === VIEW_MODE_LIST })}>
            <div className='nav_list_toolbar'>
                <div className='nav_list_name'>Списочок сумок:</div>
                <div className='toolbar'>
                    <Button
                        selected={store.viewMode === VIEW_MODE_GALLARY}
                        onClick={() => handleViewChange(VIEW_MODE_GALLARY)}
                        icon
                    >
                        th
                    </Button>
                    <Button
                        selected={store.viewMode === VIEW_MODE_LIST}
                        onClick={() => handleViewChange(VIEW_MODE_LIST)}
                        icon
                    >
                        th-list
                    </Button>
                </div>
            </div>
            <div className='nav_list'>
                {_.map(items, (item) => (
                    <div className='nav_item'>
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
        </div>
    );
};

Navigation.propTypes = {
    items: PropTypes.array.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
