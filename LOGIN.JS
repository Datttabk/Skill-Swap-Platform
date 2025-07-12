// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  
  import{getAuth,createUserWithEmailAndPassword } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAxoJZev-Jypcto5UjwN_d7ir88bXIGQBc",
    authDomain: "skill-swap-604cb.firebaseapp.com",
    projectId: "skill-swap-604cb",
    storageBucket: "skill-swap-604cb.firebasestorage.app",
    messagingSenderId: "278817419053",
    appId: "1:278817419053:web:80d1f0613401109f0aada4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  

  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event){
    event.preventDefault()

    const email=document.getElementById('email').Value;
  const password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert ("creating account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error message)
    // ..
  });
})