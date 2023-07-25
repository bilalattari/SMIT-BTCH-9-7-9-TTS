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
  equalTo,
  get,
  orderByChild,
  update,
  remove
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  query,
  getDocs,
  where,
  deleteDoc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyBSIhIo4eDHC6EgU5u9DSPKO16qEjfJPEs',
  authDomain: 'contentio-c4a23.firebaseapp.com',
  projectId: 'contentio-c4a23',
  storageBucket: 'contentio-c4a23.appspot.com',
  messagingSenderId: '994403985244',
  appId: '1:994403985244:web:6e5eb2756373e3b97a0399',
  measurementId: 'G-8XFKC1EKN2'
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)
const firestoreDb = getFirestore(app)
const productContainer = document.getElementById('products_container')
const carts_container = document.getElementById('carts_container')
const signup_btn = document.getElementById('signup_btn')
const user_info = document.getElementById('user_info')
const auth_container = document.getElementById('auth_container')
const registerBtn = document.getElementById('register_btn')
const cart_numbers = document.getElementById('cart_numbers')
const loginBtn = document.getElementById('login_btn')
const logoutBtn = document.getElementById('logout')
signup_btn.addEventListener('click', showSignUpForm)
registerBtn.addEventListener('click', register)
loginBtn.addEventListener('click', login)
logoutBtn.addEventListener('click', logout)
let products = []
let carts = 0

getProducts()

function getProducts () {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
      console.log('products-->', res)
      products = res.products
      renderProducts(res.products)
    })
}

function renderProducts (arr) {
  arr.forEach(data => {
    const card = `<div class = 'product_card col-3' > 
    <img src = ${data.thumbnail} />

    <h3>${data.title}</h3>
    <span>Price <b>  ${data.price}</b></span>
    <span>Rating <b>  ${data.rating}</b></span>
    <div>
    <button id=${data.id} class = 'btn btn-primary my-1'>Add To Cart</button>
    </div>
    </div>`
    setTimeout(() => {
      document.getElementById(data.id).addEventListener('click', addToCart)
    }, 200)

    productContainer.innerHTML += card
  })
}
function renderCarts (data) {
  const card = `<div class = 'product_cart col-12 d-flex' > 
    <img  src = ${data.thumbnail} />
    <div>
    <h3>${data.title}</h3>
    <span>Price <b>  ${data.price}</b></span>
    <span>Rating <b>  ${data.rating}</b></span>
    <div>
    <button id=${data.id} class = 'btn btn-primary my-1'>Remove</button>
    </div>
    </div>
    </div>`
  setTimeout(() => {
    document.getElementById(data.id).addEventListener('click', removeCart)
  }, 200)

  carts_container.innerHTML += card
}

function showSignUpForm () {
  productContainer.style.display = 'none'
  auth_container.style.display = 'block'
}

function register () {
  const name = document.getElementById('name').value
  const fatherName = document.getElementById('fatherName').value
  const reg_email = document.getElementById('email').value
  const reg_password = document.getElementById('password').value
  createUserWithEmailAndPassword(auth, reg_email, reg_password)
    .then(async userCredential => {
      const user = userCredential.user
      const obj = {
        name,
        fatherName,
        email: reg_email,
        uid: user.uid
      }
      console.log('user--->', user)
      const docRef = await setDoc(doc(firestoreDb, 'users', user.uid), obj)
      console.log('userRef--->', docRef)
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
    })
}

onAuthStateChanged(auth, async user => {
  console.log('on AUth state changes')
  if (user) {
    const uid = user.uid
    console.log('user.uid->', user.uid)
    const userInfo = await getUserInfo(user.uid)
    await getUserCarts()
    if (userInfo) {
      auth_container.style.display = 'none'
      productContainer.style.display = 'flex'
      signup_btn.style.display = 'none'
      user_info.style.display = 'block'
      user_info.innerHTML = userInfo.name
    }
  } else {
    // User is signed out
    signup_btn.style.display = 'block'
    user_info.style.display = 'none'
  }
})

async function getUserInfo (uid) {
  const docRef = doc(firestoreDb, 'users', uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
    return null
  }
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

function addToCart () {
  console.log(this.id)
  fetch(`https://dummyjson.com/products/${this.id}`)
    .then(res => res.json())
    .then(async res => {
      const cartRef = collection(firestoreDb, 'cart')
      res.userUid = auth.currentUser.uid
      await addDoc(cartRef, res)
      getUserCarts()
    })
}

async function removeCart () {
  console.log(this.id)
  await deleteDoc(doc(firestoreDb, 'cart', this.id))
  getUserCarts()
}

async function getUserCarts () {
  const cartRef = collection(firestoreDb, 'cart')
  const q = query(cartRef, where('userUid', '==', auth.currentUser.uid))
  const querySnapshot = await getDocs(q)
  console.log(querySnapshot.size)
  carts_container.innerHTML = null
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data())
    renderCarts({ ...doc.data(), id: doc.id })
  })
  cart_numbers.innerText = `Carts (${querySnapshot.size})`
}
