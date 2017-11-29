import { AppRegistry } from 'react-native';
import App from './App';
import App2 from './App2';
AppRegistry.registerComponent('LibProject', () => App2);

if (window.document) {
    AppRegistry.runApplication("LibProject", {
        initialProps: {},
        rootTag: document.getElementById("main")
    });
}
