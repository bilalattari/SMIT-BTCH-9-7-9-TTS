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
const loader = document.getElementById('loader')
const content_container = document.getElementById('content_container')
const login_container = document.getElementById('login_container')
const registerBtn = document.getElementById('register_btn')
const loginBtn = document.getElementById('login_btn')
const logoutBtn = document.getElementById('logout')
const senMsgBtn = document.getElementById('send_msg_btn')
const users_container = document.getElementById('users_container')
const msgs_container = document.getElementById('msgs')

let anotherUser = null
let userUid = null
onAuthStateChanged(auth, user => {
  if (user) {
    userUid = user.uid
    loader.style.display = 'none'
    content_container.style.display = 'block'
    login_container.style.display = 'none'
    getUsers()
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
senMsgBtn.addEventListener('click', sendMsg)
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
      console.log('user--->', user)
      const userRef = ref(db, `users/${user.uid}`)
      console.log('userRef--->', userRef)
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

function sendMsg () {
  const msg = document.getElementById('msg').value
  if (!msg) return alert('Please add some msg')
  const chatId = makeChatId(anotherUser, userUid)
  console.log('chatId in send msg-->', chatId)
  const chatIdRef = ref(db, `chats/${chatId}`)
  const newChatRef = push(chatIdRef)
  const obj = {
    msg,
    from: userUid,
    to: anotherUser
  }
  console.log('obj-->', obj)
  set(newChatRef, obj)
  document.getElementById('msg').value = ''
}

function makeChatId (from, to) {
  const id = from > to ? `${from}${to}` : `${to}${from}`
  return id
}

function chatFunc () {
  msgs_container.innerHTML = null
  Array.from(document.getElementsByClassName('chat_card')).forEach(card => {
    card.style.backgroundColor = '#fff'
  })
  this.style.backgroundColor = 'lightblue'
  anotherUser = this.id

  const chatId = makeChatId(auth.currentUser.uid, this.id)
  getUserChat(chatId)
}

function getUserChat (chatId) {
  const chatRef = ref(db, `chats/${chatId}`)
  onValue(chatRef, snapshot => {
    const isDataExist = snapshot.exists()
    if (isDataExist) {
      msgs_container.innerHTML = null

      snapshot.forEach(childSnapshot => {
        const childKey = childSnapshot.key
        const childData = childSnapshot.val()
        const userChatCard = `<div class = ${
          childData.from === userUid ? 'msgfrom' : 'msgTo'
        } id = ${childKey}> 
       <h4>${childData.msg}</h4>
       </div>`
        // ...
        msgs_container.innerHTML += userChatCard
      })
    }
  })
}

function getUsers () {
  const todoListRef = ref(db, `users`)
  onValue(
    todoListRef,
    snapshot => {
      const isDataExist = snapshot.exists()
      console.log('data exist', isDataExist)
      if (isDataExist) {
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key
          const childData = childSnapshot.val()
          const userChatCard = `<div class = 'chat_card' id = ${childKey}> 
           <h4>${childData.name}</h4>
           </div>`
          // ...
          users_container.innerHTML += userChatCard
          setTimeout(() => {
            const userCard = document.getElementById(childKey)
            userCard.addEventListener('click', chatFunc)
          }, 200)
        })
      }
    },
    {
      onlyOnce: true
    }
  )
}


