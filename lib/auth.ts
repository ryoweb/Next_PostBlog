import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase/client'

export const login = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((result) => {
            alert(`Hi👋${result.user.displayName}`)
        }).catch((e) => console.log(e));
}

export const logout = () => {
    signOut(auth)
        .then(() => {
            alert('Bye👋')
        }).catch((e) => console.log(e))
}
