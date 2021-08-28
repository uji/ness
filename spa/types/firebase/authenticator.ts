import firebase from 'firebase/app'
import 'firebase/auth'
import { InjectionKey } from '@vue/composition-api'

export interface IAuthenticator {
  isSignIn: () => boolean
  signInWithEmailPassword: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthenticatorKey: InjectionKey<IAuthenticator> = Symbol(
  'IAuthenticator'
)

const firebaseConfig = {
  apiKey: 'AIzaSyDoxQU1-q6IrXoo9lPHH8wLBGm4dr5BA2w',
  authDomain: 'ness-85856.firebaseapp.com',
  databaseURL: 'https://ness-85856.firebaseio.com',
  projectId: 'ness-85856',
  storageBucket: 'ness-85856.appspot.com',
  messagingSenderId: '410365716960',
  appId: '1:410365716960:web:01fb9a4a9869527b2e2385',
  measurementId: 'G-E34BNZV0JP',
}

export class Authenticator implements IAuthenticator {
  private firebaseAuth: firebase.auth.Auth
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.firebaseAuth = firebase.auth()
  }

  isSignIn(): boolean {
    const idToken = localStorage.getItem('idToken')
    return idToken !== null
  }

  signInWithEmailPassword = async (email: string, password: string) => {
    const result = await this.firebaseAuth.signInWithEmailAndPassword(
      email,
      password
    )
    if (!result.user) return
    const idToken = await result.user.getIdToken()
    localStorage.setItem('idToken', idToken)
  }

  signOut = async () => {
    await this.firebaseAuth.signOut()
    localStorage.removeItem('idToken')
  }
}

export class DryAuthenticator implements IAuthenticator {
  private signedIn: boolean
  constructor() {
    this.signedIn = true
  }

  isSignIn(): boolean {
    return this.signedIn
  }

  signInWithEmailPassword = async (email: string, password: string) => {
    await new Promise<void>((resolve) => {
      console.log('called signInWithEmailPassword')
      console.log('  email: ', email)
      console.log('  password: ', password)
      this.signedIn = true
      resolve()
    })
  }

  signOut = async () => {
    await new Promise<void>((resolve) => {
      console.log('called signOut')
      this.signedIn = false
      resolve()
    })
  }
}
