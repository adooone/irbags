import classnames from 'classnames';
// import Pagination from './Pagination/Pagination';
// import useGlobal from '../../../hooks/store';
// import { MENU_STORE } from '../../../constants/menuConsts';

// import PropTypes from 'prop-types';

const Bar = () => {
    // const [store] = useGlobal();
    return (
        <div className={classnames('bar')}>
            <div className='bar_name_container'>
                {/* <div className='adooone'><img src='https://firebasestorage.googleapis.com/v0/b/adooone-52c8a.appspot.com/o/adooone-dark.png?alt=media&token=9711c942-e857-4a17-a4cf-2a03ddb5c705' alt='adooone' /></div> */}
                <div className='bar_name'>Adooone</div>
                <div className='bar_rights'>Web production</div>
            </div>
            <div className='drawing'>
                Іллюстрація - Дарка Водокрай @daria.river.side
            </div>
            {/* { store.selectedMenu === MENU_STORE && <Pagination /> } */}
        </div>
    );
};

Bar.propTypes = {};

Bar.defaultProps = {};

export default Bar;
