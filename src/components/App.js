import { useEffect } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import useGlobal from '../hooks/store';
// import backgraundSrc from '../public/img/background.jpg';
import '../sass/main.sass';
import Markup from './Markup/markup';
import Loader from './Helpers/Loader/loader';


const App = () => {
    const [, actions] = useGlobal();
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
