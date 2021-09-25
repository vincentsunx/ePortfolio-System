var firebaseConfig = {
    apiKey: "AIzaSyD7dOBg19mnoDdE_n2o5fV2FXoojeSDliw",
    authDomain: "eportfolio-74c20.firebaseapp.com",
    databaseURL: "https://eportfolio-74c20.firebaseio.com",
    projectId: "eportfolio-74c20",
    storageBucket: "eportfolio-74c20.appspot.com",
    messagingSenderId: "384834138871",
    appId: "1:384834138871:web:18aacf6823f9a0c3c219f2",
    measurementId: "G-LZ3LTNRGCB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var messagesRef = firebase.database().ref('messages');
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(){

  var email = getInputVal('form_email');
  var name = getInputVal('form_name');
  var message = getInputVal('form_message');
  var rootRef = firebase.database().ref().child("Message");
  var userId = firebase.auth().currentUser.uid;
  var usersRef = rootRef.child(userId);

  if(name != "" && email != ""){
    var userData ={
      "Contact_Name":name,
      "Contact_email":email,
      "Message": message,
    };
    //window.alert("If");
    usersRef.set(userData, function(error)
    {
      //window.alert("Set");
      if(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
      }
      else{
        //window.alert("If");
        window.alert("Your message has been sent");
      }
   });

}else{
  window.alert("Form is incomplete.");
}
}

function getInputVal(id){
  return document.getElementById(id).value;
}
