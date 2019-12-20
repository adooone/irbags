import Logo from '../../Helpers/Logo/logo';
import Menu from './Menu/menu';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const Header = () => {
    return (
        <header>
            <section className='logo_section'>
                <Logo />
                <div className='name'>Inna Rybachuk</div>
            </section>
            <Menu />
        </header>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
