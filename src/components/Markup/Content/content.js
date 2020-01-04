import Home from './Home/Home';
import StoreBook from './StoreBook/StoreBook';
import ContactsPage from './ContactsPage/ContactsPage';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const Content = () => {
    return (
        <div className='Content'>
            <Home />
            <StoreBook />
            <ContactsPage />
        </div>
    );
};

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
