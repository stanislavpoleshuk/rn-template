/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/presentation/App';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
