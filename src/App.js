import React, {useEffect} from 'react';
import { collection, getDocs, addDoc  } from "firebase/firestore";
import db from './firebase/firebaseConfig';

export const App = () => {

  useEffect(() => {
    
    const obtenerDatos = async() => {
      const datos = await getDocs(collection(db, 'usuarios'));
      datos.forEach((documento) => {
        console.log(documento.data());
      })
    }

    obtenerDatos();
  }, [])

  useEffect(() => {
   
    const agregarDatos = async() =>{

      try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          nombre: "Ada",
          edad: 24
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    }

    agregarDatos();

  }, []);


  return (
    <>
      <h1>Firebase 9</h1>
    </>
  )
}

