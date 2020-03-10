import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'
import 'firebase/database';


const config = {
  apiKey: "AIzaSyCj1ghVbH6ya_VZVJ2Kgc3u4FxWVgtOZcA",
  authDomain: "citi-58f9b.firebaseapp.com",
  databaseURL: "https://citi-58f9b.firebaseio.com",
  projectId: "citi-58f9b",
  storageBucket: "citi-58f9b.appspot.com",
  messagingSenderId: "864414586483",
  appId: "1:864414586483:web:bbed6dabb71d2f0537fc06"
};

class Firebase {
  constructor () {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword (email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }

}

export default new Firebase()




