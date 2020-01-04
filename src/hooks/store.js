import globalHook from 'use-global-hook';

const initialState = {
    loading: true,
    selectedMenu: 'home',
    paginationVisible: false,
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
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
