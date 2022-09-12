import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: '***REMOVED***',
    authDomain: '***REMOVED***',
    projectId: '***REMOVED***',
    storageBucket: '***REMOVED***.appspot.com',
    messagingSenderId: '***REMOVED***',
    appId: '1:***REMOVED***:web:2e8263965710668c6773e4',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()
googleProvider.addScope('https://www.googleapis.com/auth/spreadsheets')

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        const user = result.user
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        return { user, token }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error)
            alert(error.message)
        }
    }
}

const logout = () => {
    signOut(auth)
}

export { signInWithGoogle, logout }
