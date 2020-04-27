import { Icon } from '@material-ui/core';
import classnames from 'classnames';
import Logo from '../../Helpers/Logo/logo';
import Menu from './Menu/menu';

// import PropTypes from 'prop-types';
import useGlobal from '../../../hooks/store';
import { MENU_STORE } from '../../../constants/menuConsts';

const Header = () => {
    const [store] = useGlobal();
    return (
        <header className={classnames({ half: store.selectedMenu === MENU_STORE })}>
            <section className='logo_section'>
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

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
