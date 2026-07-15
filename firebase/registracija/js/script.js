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
const app = firebase.initializeApp(firebaseConfig);

//inicijacija autentikacije
const auth = firebase.auth();

//inicijacija realtime baze
const db = firebase.database();

const authSection = document.getElementById("author");
const appSection = document.getElementById("app");
const stavkeListe = document.getElementById("dataList");
const dobrodosli = document.getElementById("dobrodosli");
const itemInput = document.getElementById("itemInput");

//Globalna varijabla za spremanje korisnika
let currentUser;


//pomoćne funkcije
function emailInput(){
    return document.getElementById("emailInput").value.trim();
}

function passwordInput(){
    return document.getElementById("passwordInput").value.trim();
}


//------------- AUTH ------------------

//Registracija
document.getElementById("btnRegister").addEventListener("click", async () => {
    const email = emailInput();
    const password = passwordInput();

    try {
        // FIREBASE FUNKCIJA ZA REGISTRACIJU
        const userCredential = await auth.createUserWithEmailAndPassword(
            email,
            password
        );

        console.log(userCredential);
        const uid = userCredential.user.uid;
        currentUser = userCredential.user;

        console.log(email.split("@")[0]);
        // Dodavanje korisnika u realtime bazu
        await db.ref(`korisnici/${uid}`).set({
            email: email,
            uid: uid,
            userName: email.split("@")[0]
        });

        // Ispis emaila trenutno logiranog korisnika
        dobrodosli.innerHTML = `Dobrodošli ${currentUser.email}`;
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById("btnLogin").addEventListener("click", async () => {
    const email = emailInput();
    const password = passwordInput();

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        currentUser = userCredential.user;

        dobrodosli.innerHTML = `Dobrodošli ${currentUser.email}`;

        alert("Prijava uspješna");
    } catch (error) {
        alert(error.message);
    }
});
 
//odjava korisnika
document.getElementById("btnLogout").addEventListener("click", () => {
    auth.signOut();
});

//praćenje statusa prijave, kada se korisnik prijavi ili registrira userparametar ima podatke o korisniku te nam kazuje aplikacijski dio
// a kad se korisnik odjavi prikazujemo ekran prijave i registracije
auth.onAuthStateChanged((user) => {
  if (user) {
    authSection.style.display = "none";
    appSection.style.display = "block";
  } else {
    authSection.style.display = "block";
    appSection.style.display = "none";
  }
});

//CRUD

// ------------- CREATE - DODAVANJE
document.getElementById("btnAdd").addEventListener("click", () => {
    const nazivStavke = itemInput.value.trim();
    if (nazivStavke == "") {
        alert("Niste unijeli stavku za unos");
    }
    const newRef = listRef.push();
    newRef.set({ naziv: nazivStavke });
    alert("Uspješno ste dodali stavku");
    itemInput.value = "";
});

//ispis stavki
// function loadData() {
listRef.on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    stavkeListe.innerHTML = "";

    for (let id in data) {
        const li = document.createElement("li");
        li.textContent = data[id].naziv;

//Ažuriranje
        const btnEdit = document.createElement("button");
        btnEdit.textContent = "Uredi stavku";
        btnEdit.onclick = () => {
            const noviNaziv = prompt("Novi naziv", data[id].naziv);
            if (noviNaziv) {
                db.ref(`stavke/${id}`).update({ naziv: noviNaziv });
            }
        };

//Brisanje stavki
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Obriši stavku";
        btnDelete.onclick = () => {
          db.ref(`stavke/${id}`).remove();
        }
        
        li.appendChild(btnEdit);
        stavkeListe.appendChild(li);
    }
});
// }

// loadData();