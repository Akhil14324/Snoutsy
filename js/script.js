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
// Basic JavaScript for navigation and UI interactions
// Firebase is already handled in individual HTML files

let menu = document.querySelector("#menu-btn");


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
  nav.classList.toggle("sticky", window.scrollY)
});

