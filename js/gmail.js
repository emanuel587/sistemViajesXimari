
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1wCTZqLha6-ehWFGZvRSABYclJj71m7I",
  authDomain: "login-afd30.firebaseapp.com",
  projectId: "login-afd30",
  storageBucket: "login-afd30.appspot.com",
  messagingSenderId: "782469492256",
  appId: "1:782469492256:web:5bfd07640fe35d47035645",
  measurementId: "G-82PGPNCRE6"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth();


function iniciarSesionConCorreoYContraseña(correo, contraseña) {
  signInWithEmailAndPassword(auth, correo, contraseña)
    .then((credencialUsuario) => {
      // Inicio de sesión exitoso
      const usuario = credencialUsuario.user;
      // Hacer algo con el usuario (por ejemplo, redirigir a un panel de control)
    })
    .catch((error) => {
      const códigoError = error.code;
      const mensajeError = error.message;
      // Manejar el error (por ejemplo, mostrar un mensaje de error al usuario)
    });
}


function iniciarSesion() {
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('passwordLogin').value;


  iniciarSesionConCorreoYContraseña(email, password);
}
