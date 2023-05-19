import { firebase } from "@react-native-firebase/firestore"
const firebaseConfig={
   
    apiKey: "AIzaSyBvRJupy6aR_4mDeyGMV0bPuQKrKmyBvGQ",
    authDomain: "566472761339-7u6b00ilmaphdlpn7hcck3479locr4b0.apps.googleusercontent.com",
    databaseURL: "",
    projectId: "fbdbcn-674d1",
    storageBucket: "fbdbcn-674d1.appspot.com",
    messagingSenderId: "",
    appId:"1:566472761339:android:f2f78ad1f37ca71976355e"
}
if(!firebase.apps.length){


firebase.initializeApp(firebaseConfig)}
export{firebase}