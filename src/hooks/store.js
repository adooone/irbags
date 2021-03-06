import globalHook from 'use-global-hook';
import { VIEW_MODE_LIST } from '../constants/storeConsts';

const initialState = {
    loading: true,
    selectedMenu: 'home',
    paginationVisible: false,
    viewMode: VIEW_MODE_LIST,
    appScrolled: false,
    selectedBag: null,
};

const actions = {
    setAppLoading: (store, value) => {
        store.setState({ loading: value });
    },
    selectMenu: (store, value) => {
        store.setState({ selectedMenu: value });
    },
    setPaginationVisible: (store, value) => {
        store.setState({ paginationVisible: value });
    },
    setViewMode: (store, value) => {
        store.setState({ viewMode: value });
    },
    setScrolled: (store, value) => {
        store.setState({ appScrolled: value });
    },
    selectBag: (store, value) => {
        store.setState({ selectedBag: value });
    },
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
