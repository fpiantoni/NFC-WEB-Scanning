import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from  'react';

 const  Home =  () => {
useEffect ( () => {
  const blabla = async () => {
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      console.log("> Scan started");
  
      ndef.addEventListener("readingerror", () => {
        console.log("Argh! Cannot read data from the NFC tag. Try another one?");
      });
  
      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        console.log(`> Serial Number: ${serialNumber}`);
        console.log(`> Records: (${message.records.length})`);
      });
    } catch (error) {
      console.log("Argh! " + error);
      alert("No funciona")
    }
  }
  blabla()
  
  
})
  
// if ("NDEFReader" in window){
//   console.log("SUPPORTED")
// } else {
//   console.log("Not supported")
// }
  

}

export default Home;
