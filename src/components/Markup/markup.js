// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../sass/main.sass';
// import { useState } from 'react';
import Header from './Header/header';
import Content from './Content/content';
import Bar from './Bar/bar';
import useGlobal from '../../hooks/store';
import { MENU_STORE } from '../../constants/menuConsts';
import { VIEW_MODE_GRID } from '../../constants/storeConsts';


const Markup = () => {
    // const [scrolled, setScrolled] = useState(false);
    const [store] = useGlobal();
    // const handleWheel = (e) => {
    //     if (e.target.scrollTop === 0) setScrolled(false);
    //     else setScrolled(true);
    // };

    return (
        <div
            className='markup'
            // onScroll={handleWheel}
        >
            <Header />
            <Content />
            {
                !(store.selectedMenu === MENU_STORE && store.viewMode === VIEW_MODE_GRID)
                && <Bar />
            }
        </div>
    );
};

Markup.propTypes = {
    // index: PropTypes.number.isRequired,
};

Markup.defaultProps = {
};


function select(store) {
    return {
        index: store.viewReducer.selectedMenuIndex,
    };
}

export default connect(select)(Markup);
