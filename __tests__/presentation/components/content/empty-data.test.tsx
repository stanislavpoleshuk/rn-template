import renderer from 'react-test-renderer';
import React from "react";
import {EmptyData} from "components/content/empty-data.container";
export * from 'react-native-appearance/src/mock';


it('renders correctly', () => {
    const props = {
        loading: true,
        message: 'Loading...'
    }
    renderer.create(<EmptyData {...props}/>);
});
