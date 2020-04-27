import Button from '../../../Helpers/Button/button';
import useGlobal from '../../../../hooks/store';
import { MENU_HOME, MENU_STORE, MENU_CONTACTS } from '../../../../constants/menuConsts';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const Menu = () => {
    const [store, actions] = useGlobal();
    return (
        <div
            className='Menu'
        >
            <Button
                onClick={() => actions.selectMenu(MENU_HOME)}
                selected={store.selectedMenu === MENU_HOME}
            >
                Головна
            </Button>
            <Button
                onClick={() => actions.selectMenu(MENU_STORE)}
                selected={store.selectedMenu === MENU_STORE}
            >
                Каталог
            </Button>
            <Button
                onClick={() => actions.selectMenu(MENU_CONTACTS)}
                selected={store.selectedMenu === MENU_CONTACTS}
            >
                Контакти
            </Button>
            <div className='vert_divider' />
            <Button icon>shopping-bag</Button>
        </div>
    );
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
