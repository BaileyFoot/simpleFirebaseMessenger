//This file manages reading and writing files to the filbase realtime database.

//window.alert("databaseReadAndWrite.js");
//firebase.initializeApp(config);

//gets messages reference
var messagesRef = firebase.database().ref().child("messages");
var messages = "";


messagesRef.on("child_added", snap => {
  //gets the value of the message and user field of a record
  var message = snap.child("message").val();
  var name = snap.child("user").val();
  var timeStamp = snap.child("time").val();
  

  //gets the id of the messages viewer
  var content = document.getElementById("messageViewer").innerHTML;

  //adds the a message to the message viewer
  document.getElementById("messageViewer").innerHTML = content + timeStamp + " <i><b> : " + name + " : </i></b>" + message + "<hr>";
  
});


function addMessageToDatabase(){
  //gets display name of current user
  var name = firebase.auth().currentUser.displayName;

  //gets the user's message
  var userMessage = document.getElementById("messageField").value;

  //gets database reference
  const databaseMessengerRef = firebase.database().ref();

  //gets time stamp of message
  var timeStamp = getTimeStamp();

  //creates a child of messages, storing the user's message and display name
  databaseMessengerRef.child("messages").push().set({
    message: userMessage,
    user: name,
    time: timeStamp
  });
  //console.log("added to database");

  //deletes the contents of the user's text box
  document.getElementById("messageField").value = "";

}

function getTimeStamp(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  
  if(dd<10) {
    dd = '0'+dd
  } 

  if(mm<10) {
    mm = '0'+mm
  } 

  date = mm + '/' + dd + '/' + yyyy;
  
  var time = new Date().toLocaleTimeString();
  timeStamp = date + " " + time;
  return timeStamp;
  
}
