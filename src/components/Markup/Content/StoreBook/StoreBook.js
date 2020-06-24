// import { useState } from 'react';
import classnames from 'classnames';

import Fade from '../../../Helpers/Motions/fade';
import useGlobal from '../../../../hooks/store';
import { MENU_STORE } from '../../../../constants/menuConsts';
import { VIEW_MODE_GRID } from '../../../../constants/storeConsts';
import Bag from './View/Bag';
import StoreMeta from '../../../../meta/StoreMeta';
import Navigation from './Navigation/Navigation';

// import PropTypes from 'prop-types';

const StoreBook = () => {
    const [store] = useGlobal();
    // const [viewLoaded, setViewLoaded] = useState(false);

    // useEffect(() => {
    //     setViewVisible(store.viewMode === VIEW_MODE_LIST);
    // }, [store.viewMode]);

    const selected = store.selectedMenu === MENU_STORE;
    return (
        <Fade className={classnames('StoreBook', { selected })} open={selected}>
            <div className={classnames('StoreView', { hidden: store.viewMode === VIEW_MODE_GRID })}>
                <Bag
                    data={StoreMeta.sections[0].bags[store.selectedBag || 0]}
                    // onLoad={setViewLoaded}
                />
            </div>
            <Navigation items={StoreMeta.sections[0].bags} />
        </Fade>
    );
};

StoreBook.propTypes = {};

StoreBook.defaultProps = {};

export default StoreBook;
