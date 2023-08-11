// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDLjvz74O5VakkMg65v7N0o_PdN0HM1JhM",
//     authDomain: "ecommerce-task-f5146.firebaseapp.com",
//     projectId: "ecommerce-task-f5146",
//     storageBucket: "ecommerce-task-f5146.appspot.com",
//     messagingSenderId: "192303641967",
//     appId: "1:192303641967:web:bf9a15e37219036205e49a",
//     measurementId: "G-XCGLBLN54Y"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);


// const storage = getStorage(app);

// window.add = async () => {
// // console.log("rtytgkmh")
// window.location.href = "./index.html"
//     try {
//         const docRef = await addDoc(collection(db, "products"), {
//             name: document.getElementById("name").value,
//             price: document.getElementById("price").value,
//             description: document.getElementById("desc").value,
//         });

//         const storageRef = ref(storage, `${document.getElementById("price").value}${document.getElementById("name").value}${document.getElementById("desc").value}`);

//         var file = document.getElementById("image").files[0]

//         // 'file' comes from the Blob or File API
//         uploadBytes(storageRef, file).then((snapshot) => {
//             console.log('Uploaded a blob or file!');
//             window.location.href = "./index.html"
//         });

//         console.log("Document written with ID: ", docRef.id);
//     }

//     catch (e) {
//         console.error("Error adding document: ", e);
//     }

// }



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
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
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
window.add = async () => {
    try {
        const docRef = await addDoc(collection(db, "prodcuts"), {
            name: document.getElementById("name").value,
            price: document.getElementById("price").value,
            description: document.getElementById("desc").value,
        });
        const storageRef = ref(storage, `${document.getElementById("price").value}${document.getElementById("name").value}${document.getElementById("desc").value}`);
        var file = document.getElementById("image").files[0]
        uploadBytes(storageRef, file).then((snapshot) => {
            window.location.href = "./index1.html"
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }


}
