import Fade from '../../../Helpers/Motions/fade';
import useGlobal from '../../../../hooks/store';
import { MENU_CONTACTS } from '../../../../constants/menuConsts';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const ContactsPage = () => {
    const [store] = useGlobal();
    const selected = store.selectedMenu === MENU_CONTACTS;
    return (
        <Fade className='ContactsPage' open={selected}>
            <div className='label'>ContactsPage</div>
        </Fade>
    );
};

ContactsPage.propTypes = {};

ContactsPage.defaultProps = {};

export default ContactsPage;
