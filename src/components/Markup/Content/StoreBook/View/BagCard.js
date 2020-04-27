import PropTypes from 'prop-types';
import classnames from 'classnames';

const BagCard = ({ open }) => {
    return (
        <div className={classnames('bag_card', { opened: open })}>
            <div className='gallary'>
                <div><img src='https://i.imgur.com/YROSWqm.jpg' alt='example' /></div>
                <div><img src='https://i.imgur.com/2bTZQvQ.jpg' alt='example' /></div>
                <div><img src='https://i.imgur.com/AUCyoWx.jpg' alt='example' /></div>
                {/* <div><img src='https://i.imgur.com/sRHtSpe.jpg' alt='example' /></div> */}
            </div>
        </div>
    );
};

BagCard.propTypes = {
    open: PropTypes.bool.isRequired,
    //
};

BagCard.defaultProps = {};

export default BagCard;
