//CREATE FIREBASE PROJECT
// CREATE WEB APP
//GO TO SETTINGS
//COPY CDN
//PASTE IT ON THE INDEX JS FILE
//RUN YOUR PROJECT ON LIVE SERVER

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'

import {
  getDatabase,
  ref,
  get,
  set
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'

const loader = document.getElementById('loader')
const content_container = document.getElementById('content_container')
const users_table = document.getElementById('users_table')
const login_container = document.getElementById('login_container')
const registerBtn = document.getElementById('register_btn')
const loginBtn = document.getElementById('login_btn')
const logoutBtn = document.getElementById('logout')

const firebaseConfig = {
  apiKey: 'AIzaSyAL-r26Yq2l3zBfmY_cLUzFeLk5XJKVZ8s',
  authDomain: 'sarfkidunya.firebaseapp.com',
  projectId: 'sarfkidunya',
  storageBucket: 'sarfkidunya.appspot.com',
  databaseURL: 'https://sarfkidunya-default-rtdb.firebaseio.com',
  messagingSenderId: '620702926069',
  appId: '1:620702926069:web:92026affd9594c2468b1bc',
  measurementId: 'G-9DYR9VE52L'
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)
const dummyRef = ref(db, 'contactus')

set(dummyRef, { name: 'bilal', email: 'bilal@gmail.com' })
onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid
    console.log('user.uid->', user.uid)
    loader.style.display = 'none'
    content_container.style.display = 'block'
    login_container.style.display = 'none'
    getUsersFromFirebaseDatabase()
    // ...
  } else {
    // User is signed out
    console.log('user mojood nahn he')
    loader.style.display = 'none'
    login_container.style.display = 'block'
    content_container.style.display = 'none'
    // ...
  }
})

registerBtn.addEventListener('click', register)
loginBtn.addEventListener('click', login)
logoutBtn.addEventListener('click', logout)

function register () {
  const name = document.getElementById('name').value
  const fatherName = document.getElementById('fatherName').value
  const reg_email = document.getElementById('email').value
  const reg_password = document.getElementById('password').value
  createUserWithEmailAndPassword(auth, reg_email, reg_password)
    .then(userCredential => {
      const user = userCredential.user
      const obj = {
        name,
        fatherName,
        email: reg_email
      }
      const userRef = ref(db, 'users/' + user.uid)
      set(userRef, obj)
      getUsersFromFirebaseDatabase()
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
    })
}

function login () {
  const reg_email = document.getElementById('email_log')
  const reg_password = document.getElementById('password_log')
  signInWithEmailAndPassword(auth, reg_email.value, reg_password.value)
    .then(userCredential => {
      const user = userCredential.user
      console.log('user--->', user)
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('errorMessage--->', errorMessage)
    })
}

function logout () {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    })
}

function getUsersFromFirebaseDatabase () {
  const usersRef = ref(db, 'users')

  get(usersRef)
    .then(snapshot => {
      if (snapshot.exists()) {
        // console.log()
        const users = Object.values(snapshot.val())
        users_table.innerHTML = null
        users.forEach(data => {
          const row = `<tr> <td>${data.name}</td> 
            <td>${data.fatherName}</td>
            <td>${data.email}</td>
            </tr>`

          users_table.innerHTML += row
        })
      } else {
        console.log('No data available')
      }
    })
    .catch(error => {
      console.error(error)
    })
}
