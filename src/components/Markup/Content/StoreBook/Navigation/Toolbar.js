// import PropTypes from 'prop-types';
// import classnames from 'classnames';

import useGlobal from '../../../../../hooks/store';
import { VIEW_MODE_GRID, VIEW_MODE_LIST } from '../../../../../constants/storeConsts';
import Button from '../../../../Helpers/Button/button';

const NavigationToolbar = () => {
    const [store, actions] = useGlobal();

    const handleViewChange = (mode) => {
        actions.setViewMode(mode);
    };

    return (
        <div className='nav_list_toolbar'>
            <div className='nav_list_name'>Списочок сумок:</div>
            <div className='toolbar'>
                <Button
                    selected={store.viewMode === VIEW_MODE_GRID}
                    onClick={() => handleViewChange(VIEW_MODE_GRID)}
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
    );
};

NavigationToolbar.propTypes = {};

NavigationToolbar.defaultProps = {};

export default NavigationToolbar;
