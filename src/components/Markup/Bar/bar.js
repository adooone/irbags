import classnames from 'classnames';
import Pagination from './Pagination/Pagination';
import useGlobal from '../../../hooks/store';
import { MENU_STORE } from '../../../constants/menuConsts';

// import PropTypes from 'prop-types';

const Bar = () => {
    const [store] = useGlobal();
    return (
        <div className={classnames('bar', {
            blurred: store.selectedMenu === MENU_STORE,
        })}
        >
            <div className='bar_name_container'>
                <div className='bar_name'>Inna Rybachuk</div>
                <div className='bar_rights'>All rights reserved</div>
            </div>
            { store.selectedMenu === MENU_STORE && <Pagination /> }
        </div>
    );
};

Bar.propTypes = {};

Bar.defaultProps = {};

export default Bar;
