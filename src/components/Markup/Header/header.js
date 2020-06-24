import { Icon } from '@material-ui/core';
import classnames from 'classnames';
// import PropTypes from 'prop-types';
import Logo from '../../Helpers/Logo/logo';
import Menu from './Menu/menu';

import useGlobal from '../../../hooks/store';
import { MENU_STORE, MENU_HOME } from '../../../constants/menuConsts';

const Header = () => {
    const [store, actions] = useGlobal();
    return (
        <header className={classnames({
            half: store.selectedMenu === MENU_STORE,
            // scrolled,
        })}
        >
            <section
                className='logo_section'
                onClick={() => actions.selectMenu(MENU_HOME)}
                role='presentation'
            >
                <Logo />
                <div className='name'>Інна Рибачук</div>
                <div className='info'>Сумки ручної роботи</div>
            </section>
            <Menu />
            <section className='mobile_menu'>
                <Icon fontSize='small'>menu</Icon>
            </section>
        </header>
    );
};

Header.propTypes = {
    // scrolled: PropTypes.bool.isRequired,
};

Header.defaultProps = {};

export default Header;
