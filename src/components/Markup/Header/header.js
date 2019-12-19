import Logo from '../../Helpers/Logo/logo';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const Header = () => {
    return (
        <header>
            <section className='logo_section'>
                <Logo />
                <div className='name'>Inna Rybachuk</div>
            </section>
        </header>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
