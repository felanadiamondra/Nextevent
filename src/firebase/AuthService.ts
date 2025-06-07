import { 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, 
        setPersistence, 
        browserLocalPersistence 
        } 
        from "firebase/auth";
        
import { firebaseAuth } from "../../firebase";

// User keep logged in after existing on the browser or closes tab
setPersistence(firebaseAuth, browserLocalPersistence);

export const firebaseSignIn = async ({email, password} : LoginFormValues) => {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return result
}

export const firebaseSignUp = async ({email, password} : UserFormValues) => {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    return result
}

export const firebaseSignOut = async () => {
    await signOut(firebaseAuth)
}

