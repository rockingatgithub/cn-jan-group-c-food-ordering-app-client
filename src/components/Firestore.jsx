import React, { Component } from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoX71nk6H89Qh7JU418vN-rojKQtWnnwM",
    authDomain: "fir-db-84753.firebaseapp.com",
    projectId: "fir-db-84753",
    storageBucket: "fir-db-84753.appspot.com",
    messagingSenderId: "791040594267",
    appId: "1:791040594267:web:ee415b660be33a1b640a7e",
    measurementId: "G-RL2Z8GJ1XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const addDocExample = async () => {

    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: 'Coding Ninjas'
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

const readDocExample = async () => {

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });

}

const updateDocExample = async () => {

    const washingtonRef = doc(db, "users", "nwSYVu8cDCQObp6x892I");

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
        name: 'CN',
        mnc: true
    });


}

const queryFirebase = async () => {

    const usersRef = collection(db, "users");

    // Create a query against the collection.
    const q = query(usersRef, where("mnc", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

}

class Firestore extends Component {
    render() {
        return (
            <div>

                <h1> Functions of firestore </h1>
                <button onClick={addDocExample} > Add Doc </button>
                <button onClick={readDocExample} > Read Doc </button>
                <button onClick={updateDocExample} > Update Doc </button>
                <button onClick={queryFirebase} > Query Firebase </button>

            </div>
        );
    }
}

export default Firestore;