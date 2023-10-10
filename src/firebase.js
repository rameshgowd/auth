import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCjYoCWDYXcOFt-7CLgxSM4WVQJzY9m2OY",
  authDomain: "loginpage-72a87.firebaseapp.com",
  projectId: "loginpage-72a87",
  storageBucket: "loginpage-72a87.appspot.com",
  messagingSenderId: "595967105731",
  appId: "1:595967105731:web:7851b6cc9e8f69f1ee2076"
  };
  
  // Initialize Firebase
  


  const app = initializeApp(firebaseConfig);
 
  const auth = getAuth(app);
  
  
  export { auth }; 

    