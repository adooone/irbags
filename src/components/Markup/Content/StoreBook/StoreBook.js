import { useEffect } from 'react';
import Fade from '../../../Helpers/Motions/fade';
import useGlobal from '../../../../hooks/store';
import { MENU_STORE } from '../../../../constants/menuConsts';
import Page from './Page/Page';
import StoreMeta from '../../../../meta/StoreMeta';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const StoreBook = () => {
    const [store, actions] = useGlobal();

    useEffect(() => {
        actions.setPaginationVisible(true);
    }, []);

    const selected = store.selectedMenu === MENU_STORE;
    return (
        <Fade className='StoreBook' open={selected}>
            {/* <div className='label'>StoreBook</div> */}
            {_.map(StoreMeta.sections[0].pages, (page) => <Page key={page.index} data={page} />)}
        </Fade>
    );
};

StoreBook.propTypes = {};

StoreBook.defaultProps = {};

export default StoreBook;
