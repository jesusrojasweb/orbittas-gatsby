import firebase from "firebase";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyC-IlrQmpFkFW7W9nkenEF8os3zwm7Q6vM",
  authDomain: "pagina-oribttas.firebaseapp.com",
  databaseURL: "https://pagina-oribttas.firebaseio.com",
  projectId: "pagina-oribttas",
  storageBucket: "pagina-oribttas.appspot.com",
  messagingSenderId: "577051000090",
  appId: "1:577051000090:web:d3bcb5d643424838",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const storage = firebase.storage();

export { storage };