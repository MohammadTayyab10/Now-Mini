// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLjvz74O5VakkMg65v7N0o_PdN0HM1JhM",
    authDomain: "ecommerce-task-f5146.firebaseapp.com",
    projectId: "ecommerce-task-f5146",
    storageBucket: "ecommerce-task-f5146.appspot.com",
    messagingSenderId: "192303641967",
    appId: "1:192303641967:web:bf9a15e37219036205e49a",
    measurementId: "G-XCGLBLN54Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Sign In Existing User
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

        const user = userCredential.user;
        // console.log("User Log In:", user);
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //   const uid = user.uid;
                // ...
                document.getElementById("headlessui-menu-button-1").innerHTML = email;
                window.location.href = "./index.html"
        
            } else {
                // User is signed out
                // ...
            }
        });
        // document.getElementById("headlessui-menu-button-1").innerHTML = user.email;
        // window.location.href = "./index.html"
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("ErrorCode LogIn:", errorCode);
            console.log("ErrorMessage LogIn:", errorMessage);
        })
        
    })
    
    
    var signout2 = document.getElementById(" signout ").addEventListener("click", ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            document.getElementById("headlessui-menu-button-1").innerHTML = "Sign In";
            window.location.href="./index.html"
        }).catch((error) => {
            // An error happened.
            console.log(error,"logout error");
        });
    })


    //ye fuzool hy//
    
    
    //             if (errorCode == "auth/invalid-email" && errorMessage == "Firebase: Error (auth/invalid-email).") {
        //                 Swal.fire({
            //                     title: `Email`,
//                     text: `Please Enter Email `,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else if (errorCode == "auth/user-not-found" && errorMessage == "Firebase: Error (auth/user-not-found).") {
//                 Swal.fire({
//                     title: `User`,
//                     text: `User Not Found `,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else if (errorCode == "auth/missing-password" && errorMessage == "Firebase: Error (auth/missing-password).") {
//                 Swal.fire({
//                     title: `Password`,
//                     text: `Please Enter Password`,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else if (errorCode == "auth/wrong-password" && errorMessage == "Firebase: Error (auth/wrong-password).") {
//                 Swal.fire({
//                     title: `Password`,
//                     text: `Please Enter Right Password`,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else if (errorCode == "auth/network-request-failed" && errorMessage == "Firebase: Error (auth/network-request-failed).") {
//                 Swal.fire({
//                     title: `Network Error`,
//                     text: `Please Connect Network!`,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else {
//                 Swal.fire({
//                     title: `Email`,
//                     text: `Account Matched `,
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         });

// })