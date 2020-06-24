import PropTypes from 'prop-types';
import classnames from 'classnames';
// import Button from '../../../../Helpers/Button/button';
import { VIEW_MODE_LIST, VIEW_MODE_GRID } from '../../../../../constants/storeConsts';
import useGlobal from '../../../../../hooks/store';
import NavigationToolbar from './Toolbar';
import ListMode from './ViewMode/List';
import GridMode from './ViewMode/Grid';

const Navigation = ({ items }) => {
    const [store] = useGlobal();

    return (
        <div className={classnames('Navigation', { table: store.viewMode === VIEW_MODE_GRID })}>
            <NavigationToolbar />
            { store.viewMode === VIEW_MODE_LIST && <ListMode items={items} /> }
            { store.viewMode === VIEW_MODE_GRID && <GridMode items={items} /> }
        </div>
    );
};

Navigation.propTypes = {
    items: PropTypes.array.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
