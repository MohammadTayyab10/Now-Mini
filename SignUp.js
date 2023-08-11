import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLjvz74O5VakkMg65v7N0o_PdN0HM1JhM",
    authDomain: "ecommerce-task-f5146.firebaseapp.com",
    projectId: "ecommerce-task-f5146",
    storageBucket: "ecommerce-task-f5146.appspot.com",
    messagingSenderId: "192303641967",
    appId: "1:192303641967:web:bf9a15e37219036205e49a",
    measurementId: "G-XCGLBLN54Y"
  };

  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const btn = document.getElementById("btn")
console.log(btn);
btn.addEventListener("click", () => {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email,password);


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;   
            // ...

         console.log(user);console.log('km hogaya');
            window.location.href="./logIn.html"

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        console.log(errorMessage);
        });

})
