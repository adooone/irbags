import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faCheckSquare, faCoffee, faShoppingBag, faThList, faTh,
} from '@fortawesome/free-solid-svg-icons';

import App from './components/App';
import reduxStore from './redux/store/store';

library.add(fab, faCheckSquare, faCoffee, faShoppingBag, faThList, faTh);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
