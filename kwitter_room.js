
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

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update
      ({ purpose : "adding room name" 
});

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}





function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {
       document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
       });
       });
       }
        getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      wondow.location = "kwitter_page.html";
}


function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
 
