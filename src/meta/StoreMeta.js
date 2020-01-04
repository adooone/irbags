import {
    VIEW_TYPE_INFO, VIEW_TYPE_IMAGE, POS_LEFT, POS_RIGHT, BACKGROUND_PRIMARY, BACKGROUND_SECONDARY,
} from '../constants/storeConsts';

const StoreMeta = {
    sections: [
        {
            topic: 'general',
            pages: [
                {
                    index: 1,
                    // caption: 'bags',
                    views: [
                        {
                            type: VIEW_TYPE_IMAGE,
                            img: 'https://i.imgur.com/2bTZQvQ.jpg',
                            caption: 'Photo about',
                        },
                    ],
                },
                {
                    index: 2,
                    caption: 'Model',
                    views: [
                        {
                            type: VIEW_TYPE_INFO,
                            imgPos: POS_RIGHT,
                            background: BACKGROUND_PRIMARY,
                            img: 'https://i.imgur.com/YROSWqm.jpg',
                            caption: 'Some Name',
                            info: 'Some description very. small and not very interestiong',
                        },
                        {
                            type: VIEW_TYPE_INFO,
                            imgPos: POS_LEFT,
                            background: BACKGROUND_SECONDARY,
                            img: 'https://i.imgur.com/AUCyoWx.jpg',
                            caption: 'Some Bag',
                            info: 'Some description very. small and not very interestiong',
                        },
                        {
                            type: VIEW_TYPE_INFO,
                            imgPos: POS_LEFT,
                            background: BACKGROUND_PRIMARY,
                            img: 'https://i.imgur.com/AUCyoWx.jpg',
                            caption: 'Some Bag',
                            info: 'Some description very. small and not very interestiong',
                        },
                    ],
                },
            ],
        },
    ],
};

export default StoreMeta;
