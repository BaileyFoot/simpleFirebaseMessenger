//window.alert("databaseReadAndWrite.js");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

    console.log(displayName, "is logged in");
    // ...
  } else {

    
  }
});

function logOutUser() {
  firebase.auth().signOut()
  .then(function() {
    console.log("user successfully signed out")
    window.location.replace("index.html");
  })
  .catch(function(error) {
    console.log("error signing out")
  });
}
