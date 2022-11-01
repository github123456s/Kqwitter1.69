//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCm6KriYjJPlewU6uGe0Qd48F7NmFEXMJI",
    authDomain: "kqitter-58ccf.firebaseapp.com",
    databaseURL: "https://kqitter-58ccf-default-rtdb.firebaseio.com",
    projectId: "kqitter-58ccf",
    storageBucket: "kqitter-58ccf.appspot.com",
    messagingSenderId: "103137973933",
    appId: "1:103137973933:web:ec1826e59ba381e82a1824",
    measurementId: "G-KG49KQH3VQ"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig); 


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}


