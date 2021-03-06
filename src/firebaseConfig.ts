import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import { toast } from "./toast";
const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "3",
    appId: "",
    measurementId: ""
}
firebase.initializeApp(config)

export async  function loginUser(useremail:string, userpassword:string){
    try{
        const res= await firebase.auth().signInWithEmailAndPassword(useremail,userpassword);
        console.log("datos",res);
        return true;
    }catch (error){
        console.log("errores",error);
        return false;
    }
    
    //authenticate with firebase
    //if present, show dashboard
    // if not, show erro
}
export async function registerUser(useremail:string, userpassword:string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(useremail,userpassword)
        console.log("datos usuario",res);
        return true;
    }catch (error){
        console.log("errores",error);
        toast(error.message,"danger")
        return false;
    }
    
}
export async function recoverUser(useremail:string) {
    try {
        const res = await firebase.auth().sendPasswordResetEmail(useremail)
        console.log("datos usuario",res);
        return true;
    }catch (error){
        console.log("errores",error);
        toast(error.message,"danger")
        return false;
    }
    
}
