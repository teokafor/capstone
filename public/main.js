// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc,
        getDocs, doc, setDoc, getDoc,
        connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB61Vkep5JmRNoHNxVCQSumEc7einZUkgI",
    authDomain: "capstone-1869c.firebaseapp.com",
    projectId: "capstone-1869c",
    storageBucket: "capstone-1869c.appspot.com",
    messagingSenderId: "1019291072543",
    appId: "1:1019291072543:web:5d152f849b4ae68e293d2a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(); // pass 'app' as a parameter to run on live severs.
connectFirestoreEmulator(db, '127.0.0.1', 8080);

try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "onprod?",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}

// Grab our collection titled usrMsg.

// const querySnapshot = await getDocs(collection(db, "users"));
//
// // For each document in the usrMsg collection...
// querySnapshot.forEach((doc) => {
//     // The backticks form a template literal, where ${} can be used to sub in variables.
//     console.log(`${doc.id} => ${doc.data()}`);
// });


// VVVVV WORKING CODE, DISABLED TO PREVENT READS
// Specify the collection and document you wish to retrieve (doc will be uid?)
const docRef = doc(db, "usrMsg", "nqTqbV8cqleU4nXRJIpJ");


const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
} else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
}

// TODO: Displaying real-time posts in DOM
// TODO: Spoof UIDs