import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
import {
  getStorage,
  uploadBytes,
  ref as storageRef,
  getDownloadURL
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js'
import {
  getDatabase,
  ref,
  push,
  onValue,
  child,
  set,
  query,
  equalTo,
  get,
  orderByChild,
  update,
  remove
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'

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
const storage = getStorage(app)

const loader = document.getElementById('loader')
const class_task_container = document.getElementById('class_task_container')
const login_container = document.getElementById('login_container')
const registerBtn = document.getElementById('register_btn')
const loginBtn = document.getElementById('login_btn')
const logoutBtn = document.getElementById('logout')
const senMsgBtn = document.getElementById('send_msg_btn')
const users_container = document.getElementById('users_container')
const msgs_container = document.getElementById('msgs')
const user_img = document.getElementById('user_img')
let user_img_url = null
let userInfo = null

let anotherUser = null
let userUid = null
onAuthStateChanged(auth, user => {
  if (user) {
    userUid = user.uid
    loader.style.display = 'none'
    content_container.style.display = 'block'
    login_container.style.display = 'none'
    getUserInfo()
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

user_img.addEventListener('change', uploadImg)
function register () {
  const name = document.getElementById('name').value
  const fatherName = document.getElementById('fatherName').value
  const reg_email = document.getElementById('email').value
  const reg_password = document.getElementById('password').value
  var getSelectedValue = document.querySelector('input[name="role"]:checked')
  createUserWithEmailAndPassword(auth, reg_email, reg_password)
    .then(userCredential => {
      const user = userCredential.user
      const obj = {
        name,
        fatherName,
        email: reg_email,
        avatar: user_img_url,
        role: getSelectedValue.defaultValue
      }
      const userRef = ref(db, `users/${user.uid}`)
      set(userRef, obj)
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

function uploadImg () {
  const imgRef = storageRef(storage, 'users/' + this.files[0].name)
  uploadBytes(imgRef, this.files[0]).then(snapshot => {
    getDownloadURL(imgRef)
      .then(url => {
        const userimg = document.getElementById('user_avatar')
        userimg.src = url
        user_img_url = url
      })
      .catch(err => console.error(err))
  })
}

function getUserInfo () {
  get(child(ref(db), `users/${auth.currentUser.uid}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
        userInfo = snapshot.val()
        document.getElementById('user_nav_avatar').src = userInfo.avatar
      } else {
        console.log('No data available')
      }
    })
    .catch(error => {
      console.error(error)
    })
}
