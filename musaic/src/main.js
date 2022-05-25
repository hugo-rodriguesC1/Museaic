import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import mitt from 'mitt';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuq-lSxFils0ix0l8hqb7iEXC8LjfSEEg",
    authDomain: "museaic-56432.firebaseapp.com",
    projectId: "museaic-56432",
    storageBucket: "museaic-56432.appspot.com",
    messagingSenderId: "1073889752972",
    appId: "1:1073889752972:web:b2a74fdd77f1331bc088a9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

export const emitter = mitt();

app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')