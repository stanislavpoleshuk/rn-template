import React from 'react';
import {Image, ImageRequireSource} from 'react-native';


/**
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages#3rd-party-icon-packages
 */
const IconProvider = (source: ImageRequireSource) => ({
    toReactElement: ({ animation, style }) => (
        <Image style={style} source={source}/>
    ),
});

export const AppIconsPack = {
    name: 'app',
    icons: {
        'vk': IconProvider(require('./source/social/vk.png')),
        // 'vk-dark': IconProvider(require('../assets/images/icon-login-dark.png')),
        'pick': IconProvider(require('./source/common/pick.png')),
        'pick-dot': IconProvider(require('./source/common/pick_dot.png')),
    },
};
