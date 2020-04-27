import { useEffect } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
// import PropTypes from 'prop-types';
import useGlobal from '../hooks/store';
// import backgraundSrc from '../public/img/background.jpg';
import '../sass/main.sass';
import Markup from './Markup/markup';
import Loader from './Helpers/Loader/loader';
import { MENU_HOME } from '../constants/menuConsts';


const App = () => {
    const [store, actions] = useGlobal();
    const didMount = () => {
        window.onload = () => {
            console.log('all is loaded!');
            setTimeout(() => {
                actions.setAppLoading(false);
            }, 1000);
        };
    };

    useEffect(didMount, []);

    return (
        <>
            <Loader />
            <Markup />
            <div
                id='radial_g'
                className={classnames({ home_hidden: store.selectedMenu !== MENU_HOME })}
            />
            <canvas id='home_canvas' />
        </>
    );
};

App.propTypes = {
    // loading: PropTypes.bool.isRequired,
};

function select(store) {
    return {
        loading: store.viewReducer.loading,
    };
}

export default connect(select)(App);
