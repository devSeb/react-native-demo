import { AppRegistry } from 'react-native';
// import App from './App';
// import App2 from './App2';
import App from './zComponents/App.js'

AppRegistry.registerComponent('LibProject', () => App);

if (window.document) {
    AppRegistry.runApplication("LibProject", {
        initialProps: {},
        rootTag: document.getElementById("main")
    });
}
