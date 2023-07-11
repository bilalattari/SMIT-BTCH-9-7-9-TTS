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
  orderByChild
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
const dummyRef = ref(db, 'contactus')
const loader = document.getElementById('loader')
const content_container = document.getElementById('content_container')
const container_products = document.getElementById('container-products')
const login_container = document.getElementById('login_container')
const registerBtn = document.getElementById('register_btn')
const loginBtn = document.getElementById('login_btn')
const logoutBtn = document.getElementById('logout')
const loadMoreBtn = document.getElementById('loadMore')
const searchInput = document.getElementById('search_input')
const searchBtn = document.getElementById('search')
const submitBtn = document.getElementById('submit_post_btn')
const postHeading = document.getElementById('heading')
const postContent = document.getElementById('content')
const blogContainer = document.getElementById('blog_container')
const blog_container_personal = document.getElementById('blog_container_personal')

const postRef = ref(db, 'posts');
let numberOfProducts = 5



set(dummyRef, { name: 'bilal', email: 'bilal@gmail.com' })
onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid
    console.log('user.uid->', user.uid)
    loader.style.display = 'none'
    content_container.style.display = 'block'
    login_container.style.display = 'none'
    getAllPosts()
    getUsersPosts()
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
// loadMoreBtn.addEventListener('click', loadMore)
// searchBtn.addEventListener('click', searchFunc)
submitBtn.addEventListener('click', submitPost)


function register() {
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
      const userRef = ref(db, `users/${user.uid}`)
      set(userRef, obj)

    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
    })
}

function login() {
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

function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    })
}


function getAllPosts() {
  onValue(postRef, (snapshot) => {
    console.log('snapshot-->', snapshot.val())
    const data = snapshot.val();
    if (data && blogContainer) {
      blogContainer.innerHTML = null
      Object.values(data).forEach((post) => {
        const card = `<div class = 'blog_card'>
        <h3>${post.heading} </h3>
        <p> ${post.content}</p>
        </div>`
        blogContainer.innerHTML += card
      })

    }
    // updateStarCount(postElement, data);
  });
}

function getUsersPosts() {
  const recentPostsRef = query(ref(db, 'posts'), orderByChild('uid'), equalTo(auth.currentUser.uid));

  get(recentPostsRef).then((data) => {
    const userPosts = data.val()
    console.log('userPosts->' ,userPosts)
    if(userPosts){
      
      blog_container_personal.innerHTML = null
      Object.values(userPosts).forEach((post) => {
        const card = `<div class = 'blog_card'>
        <h3>${post.heading} </h3>
        <p> ${post.content}</p>
        </div>`
        blog_container_personal.innerHTML += card
      })
    }
  }).catch((err) => {
    console.log(err)
  })


  // onValue(postRef, (snapshot) => {
  //   console.log('snapshot-->', snapshot.val())
  //   const data = snapshot.val();
  //   if (data) {
  //     blogContainer.innerHTML = null
  //     Object.values(data).forEach((post) => {
  //       const card = `<div class = 'blog_card'>
  //       <h3>${post.heading} </h3>
  //       <p> ${post.content}</p>
  //       </div>`
  //       blogContainer.innerHTML += card
  //     })

  //   }
  // updateStarCount(postElement, data);
  // });
}

function submitPost() {
  const obj = {
    heading: postHeading.value,
    content: postContent.value,
    uid: auth.currentUser.uid
  }
  const postKey = push(child(ref(db), 'posts')).key
  obj.key = postKey
  set(ref(db, `posts/${postKey}`), obj)
}

// function getProductsFromApi () {
//   console.log('numberOfProducts-->', numberOfProducts)
//   fetch(`https://fakestoreapi.com/products?limit=${numberOfProducts}`)
//     .then(res => res.json())
//     .then(json => {
//       console.log('json->', json)
//       container_products.innerHTML = null

//       json.forEach((data, i) => {
//         //desctructuring
//         const { image, title, price } = data
//         const card = `<div class='card' >
//         <img src =${image} />
//         <h4>${title} </h4>
//         <h4>${price} </h4>
//         </div>`
//         container_products.innerHTML += card
//       })
//     })
// }

// function loadMore () {
//   numberOfProducts = numberOfProducts + 5
//   getProductsFromApi()
// }

// function searchFunc () {
//   fetch(`https://dummyjson.com/products/search?q=${searchInput.value}`)
//     .then(res => res.json())
//     .then(json => {
//       container_products.innerHTML = null

//       json.products.forEach((data, i) => {
//         //desctructuring
//         const { thumbnail, title, price } = data
//         const card = `<div class='card' >
//     <img src =${thumbnail} />
//     <h4>${title} </h4>
//     <h4>${price} </h4>
//     </div>`
//         container_products.innerHTML += card
//       })
//     })
// }
