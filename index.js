/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import Flexbox from './src/Flexbox';
import {name as appName} from './app.json';
import Main from './Claculator/Main';
import Appp from './auth/Appp';
import Root from './parameter/Root';
import AppScreen from './pages2/AppSceen'
import firebase from './Firebase/firebase'


AppRegistry.registerComponent(appName, () => Appp);
