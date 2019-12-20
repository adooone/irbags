import Button from '../../../Helpers/Button/button';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const Menu = () => {
    return (
        <div className='Menu'>
            <Button>Home</Button>
            <Button>Store</Button>
            <Button>Contacts</Button>
        </div>
    );
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
