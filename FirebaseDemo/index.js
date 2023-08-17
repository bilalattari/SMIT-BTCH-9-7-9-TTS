import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getAuth, signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged, createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
    getFirestore, collection,
    query, where,
    addDoc, doc, getDoc, getDocs, setDoc
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAMyPnigA82hTdQB9FIzoXeDd37C1jamZ8",
    authDomain: "batch9-983b4.firebaseapp.com",
    databaseURL: "https://batch9-983b4-default-rtdb.firebaseio.com",
    projectId: "batch9-983b4",
    storageBucket: "batch9-983b4.appspot.com",
    messagingSenderId: "262976751573",
    appId: "1:262976751573:web:8500a3d14c772f36365f5c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signUpForm = document.getElementById('signup')
const loginForm = document.getElementById('login')
const loader_container = document.getElementById('loader_container')
const createAccountContainer = document.getElementById('createAccountContainer')
const content_container = document.getElementById('content_container')
const post_form = document.getElementById('post_form')
const post_container = document.getElementById('post_container')
const logout = document.getElementById('logout')
const welcome = document.getElementById('welcome')


signUpForm.addEventListener('submit', signup)
loginForm.addEventListener('submit', login)
post_form.addEventListener('submit', submitPost)
logout.addEventListener('click', logoutUser)



onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        console.log('User uid-->', uid)
        loader_container.style.display = 'none'
        createAccountContainer.style.display = 'none'
        content_container.style.display = 'block'
        getPosts()
        const info = await getUserInfo(uid)
        welcome.innerHTML = `Welcome ${info.name}`
        // ...
    } else {
        console.log('User is not logged in')
        loader_container.style.display = 'none'
        createAccountContainer.style.display = 'block'
        content_container.style.display = 'none'

    }
});

function signup(e) {
    e.preventDefault()
    const name = document.getElementById('signup_name').value
    const email = document.getElementById('signup_email').value
    const password = document.getElementById('signup_password').value

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const userInfo = {
                name,
                email,
                uid: user.uid
            }
            const userRef = doc(db, 'bilal_users', user.uid)

            await setDoc(userRef, userInfo)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
}

function login(e) { 
    e.preventDefault()
    const email = document.getElementById('login_email').value
    const password = document.getElementById('login_password').value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
 }

async function submitPost(e) {
    e.preventDefault()
    const title = document.getElementById('post_title').value
    const description = document.getElementById('post_desc').value

    const userInfo = await getUserInfo(auth.currentUser.uid)
    const postObj = {
        title,
        description,
        userUid: auth.currentUser.uid,
        userName: userInfo.name,
        created_at: new Date().getTime().toString()
    }

    const postRef = collection(db, 'bilal_post')
    await addDoc(postRef, postObj)

    getPosts()
    post_form.reset()
}

async function getUserInfo(uid) {
    const userRef = doc(db, "bilal_users", uid)
    const docSnap = await getDoc(userRef);
    let info = null
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        info = docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

    return info
}

async function getPosts() {
    const q = query(collection(db, "bilal_post"), where("userUid", "==", auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    post_container.innerHTML = null
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const postInfo = doc.data()
        const { title, created_at, userName, description
        } = postInfo
        const card = `<div class="card">
        <div class="card-title card-userInfo">
          <span> Post By  ${userName} </span> 
          <span> ${new Date().toLocaleDateString()} </span> 
         
        </div>
        <div class="card-title">
         ${title}
        </div>
        <div class="card-body"> ${description} </div>
      </div>`

        post_container.innerHTML += card

    });
}

function logoutUser() {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
