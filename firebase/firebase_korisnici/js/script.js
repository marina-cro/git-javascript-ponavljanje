
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  import { 
    getDatabase, 
    ref, 
    onValue,
    push,
    remove,
    update
   } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCtHUI5V3qZPW1k-YXR6C-herzcpPnP-Nc",
    authDomain: "frontend-gen6.firebaseapp.com",
    databaseURL: "https://frontend-gen6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "frontend-gen6",
    storageBucket: "frontend-gen6.firebasestorage.app",
    messagingSenderId: "746180350454",
    appId: "1:746180350454:web:b40c0dc187eafbe6c237d7",
    measurementId: "G-927V1C2G85"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const userList = document.getElementById('usersList');
const addUserForm = document.getElementById('addUserForm');
const nameinput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');

const usersref = ref(db, 'users');

//console.log(usersRef);

//prikaz korisnika u stvarnom vremenu
onValue(usersref, (snapshot) => {
    userList.innerHTML = '';
    const data = snapshot.val();
    console.log(data);

    if(data) {
        Object.entries(data).forEach(([key, user]) => {
        const li=document.createElement('li');
        li.textContent = `${user.Name} (${user.Email})`;
        li.dataset.key = key;

        userList.appendChild(li);
        });
    }else {
        userList.innerHTML = '<li>Nema korisnika u bazi.</li>';
    }
});

//dodavanje novog korisnika putem forme
addUserForm.addEventListener('submit', (event) => {
   //metoda za zaustavljanje defaultnog ponašanja forme (refresh stranice)
    event.preventDefault();

    const newuser = {
        Name: nameinput.value.trim(),
        Email: emailInput.value.trim()
    };

    if(newuser.Name && newuser.Email) {
        push(usersref, newuser).then(() => {
            addUserForm.reset();
        }).catch((error) => {
            alert('Greška prilikom dodavanja korisnika:${error}');
        });
    }
});