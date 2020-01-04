import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
    VIEW_TYPE_IMAGE, VIEW_TYPE_INFO, POS_RIGHT, BACKGROUND_PRIMARY, BACKGROUND_SECONDARY,
} from '../../../../../constants/storeConsts';
// import IrButton from '../../../../Helpers/IrButton/IrButton';

const PageView = (props) => {
    const { data } = props;
    const image = () => (
        <>
            <div className='image'>
                <img src={data.img} alt='img' />
            </div>
            <div className='caption_image'>{data.caption}</div>
        </>
    );
    const info = () => (
        <>
            <div className='image_info'>
                <img src={data.img} alt='img' />
            </div>
            <div className='info_group'>
                <div className='caption_info'>{data.caption}</div>
                <div className='text_info'>{data.info}</div>
                {/* <IrButton small>Open</IrButton> */}
            </div>
        </>
    );
    return (
        <div className={classnames('PageView', {
            image: data.type === VIEW_TYPE_IMAGE,
            info: data.type === VIEW_TYPE_INFO,
            reversed: data.imgPos === POS_RIGHT,
            primary: data.background === BACKGROUND_PRIMARY,
            secondary: data.background === BACKGROUND_SECONDARY,
        })}
        >
            {data.type === VIEW_TYPE_IMAGE ? image() : info()}
        </div>
    );
};

PageView.propTypes = {
    data: PropTypes.object,
};

PageView.defaultProps = {
    data: {},
};

export default PageView;
