import PropTypes from 'prop-types';
import classnames from 'classnames';
import PageView from './View';

const Page = (props) => {
    const { data } = props;
    const isLeft = data.index % 2 === 1;
    console.log(data.index);
    console.log(data.index % 2);
    return (
        <div className={classnames('Page', { left: isLeft, right: !isLeft })}>
            { data.caption && <div className='caption'>{data.caption}</div> }
            <div className='scroller'>
                {_.map(data.views, (view, i) => <PageView key={i} data={view} />)}
            </div>
        </div>
    );
};

Page.propTypes = {
    // children: PropTypes.any,
    data: PropTypes.object,
};

Page.defaultProps = {
    // children: null,
    data: {},
};

export default Page;
