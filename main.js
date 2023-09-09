// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
 import { getAuth, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANO8UyVlf0UiRQ1N6x7kss9NpJ8rAP-6Y",
  authDomain: "skyfie-8c7f3.firebaseapp.com",
  databaseURL: "https://skyfie-8c7f3-default-rtdb.firebaseio.com",
  projectId: "skyfie-8c7f3",
  storageBucket: "skyfie-8c7f3.appspot.com",
  messagingSenderId: "1036490365459",
  appId: "1:1036490365459:web:447f29584560815881bde6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth =getAuth()

// send data to data base
function sendData() {
  const firstname = getElId('firstname')
  const lastname = getElId('lastname')
  const message = getElId('message');
  const messageContainer = getElId("messageContainer");
  set(ref(database, 'message/' + firstname.value),
  {
    message: `${message.value}`,
    firstname: `${firstname.value}`,
    lastname: `${lastname.value}`,
    exceptiona: [{ name: 'traster', uuid: 'uuid' }]
  })

}
// submit data 

document.querySelector('form').onsubmit = function(e) {
  e.preventDefault()
  return sendData()
  
}
// get elemen by id 
function getElId(el) {
  return document.getElementById(el)
}
// date 
function date() {
  let date = new Date
  const _dateContainer = getElId('date')
  _dateContainer.innerHTML = date.getFullYear()
}
date()

// toast section
// const toastTrigger = document.getElementById('')


// body...
/*const toastTrigger = document.querySelector('form')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('submit', () => {
    toastBootstrap.show()
  })
}*/

let btn=  document.getElementById('sign').onclick= function(){
  // body...
  // body...
  console.log('hello');
const provider=new GoogleAuthProvider()
signInWithRedirect(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
  
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
