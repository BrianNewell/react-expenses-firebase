import { firebaseApp, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, userDisplayName, userPhotoURL) => ({
    type: 'LOGIN',
    uid,
    userDisplayName,
    userPhotoURL
});

export const startLogin = () => {
    return () => {
        return firebaseApp.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginAnon = () => {
    return () => {
        return firebaseApp.auth().signInAnonymously();
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        firebaseApp.auth().signOut();
    };
};