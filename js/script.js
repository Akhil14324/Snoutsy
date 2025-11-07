let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.addEventListener("scroll", function () {
  const nav = document.querySelector("header");
  nav.classList.toggle("sticky", window.scrollY)});

//   // Your Firebase configuration (copy from console)
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// // HTML elements
// const loginBtn = document.getElementById("loginBtn");
// const logoutBtn = document.getElementById("logoutBtn");
// const userInfo = document.getElementById("userInfo");

// // Login with Google
// loginBtn.addEventListener("click", async () => {
//   try {
//     const result = await auth.signInWithPopup(provider);
//     const user = result.user;
//     userInfo.innerHTML = `
//       <p><strong>Welcome:</strong> ${user.displayName}</p>
//       <p><strong>Email:</strong> ${user.email}</p>
//       <img src="${user.photoURL}" width="50">
//     `;
//     loginBtn.style.display = "none";
//     logoutBtn.style.display = "block";
//   } catch (error) {
//     console.error("Login error:", error);
//   }
// });

// // Logout
// logoutBtn.addEventListener("click", async () => {
//   await auth.signOut();
//   userInfo.innerHTML = "";
//   loginBtn.style.display = "block";
//   logoutBtn.style.display = "none";
// });
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/14.24.0/firebase-app.js";
import { getAuth,googleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/14.24.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAZnkTV-mK0F7Q4Fm5OeK_vRPHFgGt6Gms",
  authDomain: "snoutsy-df81c.firebaseapp.com",
  projectId: "snoutsy-df81c",
  storageBucket: "snoutsy-df81c.firebasestorage.app",
  messagingSenderId: "636456747643",
  appId: "1:636456747643:web:f62ed4b7fe0b3217b998de",
  measurementId: "G-G13VVSSN6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new googleAuthProvider();
const auth = getAuth();
auth.languageCode = 'en';

const googleLogin = document.getElementById("googleLoginBtn");
googleLogin.addEventListener("click", function() {
  alert(5)
});

