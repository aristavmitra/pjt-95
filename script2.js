var firebaseConfig = {
    apiKey: "AIzaSyAIQ1ijlpKZk-FHIJPx6EqL0IQU2eWqANQ",
    authDomain: "letschatapp-afc89.firebaseapp.com",
    databaseURL: "https://letschatapp-afc89-default-rtdb.firebaseio.com",
    projectId: "letschatapp-afc89",
    storageBucket: "letschatapp-afc89.appspot.com",
    messagingSenderId: "938320811502",
    appId: "1:938320811502:web:c4296e6079c87e98bfaaff"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username")
  document.getElementById("emptylabel").innerHTML = "welcome" + username

  function addrooms(){
     roomname = document.getElementById("textbox2").value;
     firebase.database().ref("/").child(roomname).update({
      purpose : "adding rooms"
     })

     
  }

  function getrooms(){
    firebase.database().ref("/").on("value",function(snapshot){
      document.getElementById("div2").innerHTML = "";
      snapshot.forEach(function(childsnapshot){

        childkey = childsnapshot.key;
        roomname = childkey;
        row = "<div class='name' id=" + roomname + "onclick=room_name(this.id)>#  "+ roomname + "</div>"
        document.getElementById("div2").innerHTML += row
      })
    })
  }

  getrooms();