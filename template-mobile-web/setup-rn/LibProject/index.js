import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('LibProject', () => App);

if (window.document) {
    AppRegistry.runApplication("LibProject", {
        initialProps: {},
        rootTag: document.getElementById("main")
    });
}
