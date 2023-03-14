import {initializeApp} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
import { getFirestone, query, addDoc, orderBy, limit, getDocs, collection} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDXqIH6NMNvkSAaKUMer-T9JOUJnVircfY",
    authDomain: "mathproject-75df3.firebaseapp.com",
    projectId: "mathproject-75df3",
    storageBucket: "mathproject-75df3.appspot.com",
    messagingSenderId: "184297329124",
    appId: "1:184297329124:web:21cb9df5a427fa891ef7f1",
    measurementId: "G-1T9LE0HQ1X"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseCollection = "scores";

export function addData(name, score) {
    addDoc(collection(firestoreDatabase, firebaseCollection), {
        name: name,
        score: score,
    });
}
 
export async function getData(dataLimit) {
    const scoresRef = collection(firestoreDatabase, "scores");
    const q = query(scoresRef, orderBy("score", "desc"), limit(dataLimit));
    return await getDocs(q);
}
 