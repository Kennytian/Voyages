/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';

console.disableYellowBox = true;
YellowBox.ignoreWarnings([
    'RCTBridge',
]);

AppRegistry.registerComponent(appName, () => App);
