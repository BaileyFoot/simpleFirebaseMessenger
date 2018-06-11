//window.alert("databaseReadAndWrite.js");
//firebase.initializeApp(config);

//gets messages reference
var messagesRef = firebase.database().ref().child("messages");
var messages = "";

messagesRef.on("child_added", snap => {
  //gets the value of the message and user field of a record
  var message = snap.child("message").val();
  var name = snap.child("user").val();

  //gets the id of the messages viewer
  var content = document.getElementById("messageViewer").innerHTML;

  //adds the a message to the message viewer
  document.getElementById("messageViewer").innerHTML = content + "<i>" + name + "</i>" + ": " + "<b>" + message + "</b>" + "<hr><hr>";
});


function addMessageToDatabase(){
  //gets display name of current user
  var name = firebase.auth().currentUser.displayName;

  //gets the user's message
  var userMessage = document.getElementById("messageField").value;

  //gets database reference
  const databaseMessengerRef = firebase.database().ref();

  //creates a child of messages, storing the user's message and display name
  databaseMessengerRef.child("messages").push().set({
    message: userMessage,
    user: name
  });
  console.log("added to database");

  //deletes the contents of the user's text box
  document.getElementById("messageField").value = "";

}
